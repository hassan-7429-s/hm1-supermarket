import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PromoBanner = () => {
  return (
    <section className="my-16">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer!</h2>
              <p className="text-lg mb-6">Get 20% off on all fresh fruits & vegetables. Use code <span className="bg-white text-green-600 px-3 py-1 rounded font-mono">FRESH20</span></p>
              <Link to="/products?category=Fruits" className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Shop Now
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;