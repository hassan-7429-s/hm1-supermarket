import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ category, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link
        to={`/products?category=${category}`}
        className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 text-center"
      >
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${color}`}>
          <Icon size={32} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
        <p className="text-sm text-gray-500 mt-1">Shop now →</p>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;