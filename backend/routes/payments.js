import express from 'express';
import Stripe from 'stripe';
import Order from '../models/Order.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// @route   POST /api/payments/create-payment-intent
// @desc    Create Stripe payment intent
// @access  Private
router.post('/create-payment-intent', protect, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    // Calculate total amount (in cents/francs)
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 100;

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount),
      currency: 'rwf', // or 'usd' for international
      metadata: {
        userId: req.user._id.toString(),
        items: JSON.stringify(items.map(i => ({ 
          id: i._id, 
          quantity: i.quantity,
          price: i.price 
        })))
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      totalAmount: totalAmount / 100
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/payments/webhook
// @desc    Handle Stripe webhook events
// @access  Public
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verify webhook signature (you'll need to set up webhook secret in Stripe dashboard)
    event = stripe.webhooks.constructEvent(
      req.body, 
      sig, 
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      
      // Create order in database
      try {
        const userId = paymentIntent.metadata.userId;
        const items = JSON.parse(paymentIntent.metadata.items);
        
        const order = new Order({
          user: userId,
          items: items.map(item => ({
            product: item.id,
            quantity: item.quantity,
            price: item.price
          })),
          totalAmount: paymentIntent.amount / 100,
          paymentStatus: 'paid',
          orderStatus: 'confirmed',
          stripePaymentIntentId: paymentIntent.id
        });

        await order.save();
        console.log('✅ Order created from payment intent:', order._id);
      } catch (error) {
        console.error('Error creating order from webhook:', error);
      }
      break;

    case 'payment_intent.payment_failed':
      const failedIntent = event.data.object;
      console.log('❌ Payment failed:', failedIntent.id);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

export default router;