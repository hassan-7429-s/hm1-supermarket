import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link to={`/product/${product._id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-green-600 transition">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            {product.discount > 0 ? (
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-green-600">
                  RWF {(product.price * (1 - product.discount / 100)).toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  RWF {product.price.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="text-xl font-bold text-green-600">
                RWF {product.price.toLocaleString()}
              </span>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition text-lg"
          >
            🛒
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;