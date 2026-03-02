import React from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import PromoBanner from '../components/PromoBanner';
import { motion } from 'framer-motion';

// Categories without icons (using simple emoji or just color)
const categories = [
  { name: 'Fruits', emoji: '🍎', color: 'bg-red-500' },
  { name: 'Vegetables', emoji: '🥦', color: 'bg-green-500' },
  { name: 'Dairy', emoji: '🥛', color: 'bg-blue-500' },
  { name: 'Meat', emoji: '🥩', color: 'bg-orange-500' },
  { name: 'Bakery', emoji: '🍞', color: 'bg-yellow-500' },
];

// Mock products (same)
const mockProducts = [
  {
    _id: '1',
    name: 'Fresh Apples',
    price: 3000,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    discount: 10,
  },
  // ... rest of products
];

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Categories Section */}
      <section className="container-custom py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${cat.color} text-white`}>
                {cat.emoji}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Shop now →</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container-custom py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      <PromoBanner />

      {/* Why Choose Us */}
      <section className="container-custom py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Why Choose H&M?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
              🚚
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery within Kigali.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
              ✅
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">We source only the freshest products.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl">
              💳
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Multiple payment options including mobile money.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;