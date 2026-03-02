import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import User from '../models/User.js';

dotenv.config();

const products = [
  {
    name: 'Fresh Apples',
    description: 'Crisp and sweet apples, perfect for healthy snacking',
    price: 3000,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    stock: 50,
    unit: 'kg',
    featured: true,
    discount: 0
  },
  {
    name: 'Organic Bananas',
    description: 'Rich in potassium, freshly imported',
    price: 2500,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e',
    stock: 100,
    unit: 'kg',
    featured: true,
    discount: 10
  },
  {
    name: 'Fresh Milk',
    description: 'Pure and fresh, from local farms',
    price: 2000,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
    stock: 30,
    unit: 'liter',
    featured: false,
    discount: 0
  },
  {
    name: 'Whole Wheat Bread',
    description: 'Freshly baked daily',
    price: 1500,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    stock: 20,
    unit: 'piece',
    featured: true,
    discount: 0
  },
  {
    name: 'Chicken Breast',
    description: 'Boneless, skinless chicken breast',
    price: 8000,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
    stock: 15,
    unit: 'kg',
    featured: false,
    discount: 5
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('📦 Products cleared');

    // Insert new products
    await Product.insertMany(products);
    console.log('✅ Products seeded successfully');

    // Close connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();