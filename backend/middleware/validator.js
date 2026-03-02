import { body, validationResult } from 'express-validator';

// Validation rules
export const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
];

export const validateLogin = [
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

export const validateProduct = [
  body('name').notEmpty().withMessage('Product name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  body('category').notEmpty().withMessage('Category is required'),
  body('stock').isNumeric().withMessage('Stock must be a number')
];

export const validateOrder = [
  body('orderItems').isArray({ min: 1 }).withMessage('Order must have at least one item'),
  body('shippingAddress').notEmpty().withMessage('Shipping address is required'),
  body('paymentMethod').isIn(['stripe', 'cod']).withMessage('Invalid payment method')
];

// Check validation results
export const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};