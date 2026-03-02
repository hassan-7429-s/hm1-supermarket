import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">H&M Supermarket</h3>
            <p className="text-sm">Your trusted online grocery store. Fresh, quality, and affordable products delivered to your doorstep.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-green-400 transition">FAQ</Link></li>
              <li><Link to="/terms" className="hover:text-green-400 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Fruits" className="hover:text-green-400 transition">Fruits</Link></li>
              <li><Link to="/products?category=Vegetables" className="hover:text-green-400 transition">Vegetables</Link></li>
              <li><Link to="/products?category=Dairy" className="hover:text-green-400 transition">Dairy</Link></li>
              <li><Link to="/products?category=Meat" className="hover:text-green-400 transition">Meat</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: support@hmsupermarket.rw</li>
              <li>Phone: +250 788 123 456</li>
              <li>Location: Kigali, Rwanda</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} H&M Supermarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;