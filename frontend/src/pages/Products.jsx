import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Mock products (you can move this to a separate file later)
const allProducts = [
  {
    _id: '1',
    name: 'Fresh Apples',
    price: 3000,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    discount: 10,
  },
  {
    _id: '2',
    name: 'Organic Bananas',
    price: 2500,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
    discount: 0,
  },
  {
    _id: '3',
    name: 'Fresh Milk',
    price: 2000,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    discount: 0,
  },
  {
    _id: '4',
    name: 'Whole Wheat Bread',
    price: 1500,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    discount: 0,
  },
  {
    _id: '5',
    name: 'Chicken Breast',
    price: 8000,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
    discount: 5,
  },
  {
    _id: '6',
    name: 'Fresh Tomatoes',
    price: 2000,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337',
    discount: 0,
  },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (searchQuery) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container-custom py-8"
    >
      <h1 className="text-3xl font-bold mb-4">
        {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
      </h1>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Products;