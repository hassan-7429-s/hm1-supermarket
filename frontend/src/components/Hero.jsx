import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Fresh Groceries <br /> Delivered to Your Door
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-50">
              Shop from the comfort of your home. Thousands of products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                Shop Now
              </Link>
              <Link to="/offers" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-medium">
                View Offers
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1542838132-92c533f91d7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Fresh groceries"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;