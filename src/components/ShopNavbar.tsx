import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ShopNavbar.css';

const ShopNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { state } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <motion.nav 
      className={`shop-navbar ${isScrolled ? 'shop-navbar-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="shop-navbar-container">
        <motion.div 
          className="shop-navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackToHome}
          style={{ cursor: 'pointer' }}
        >
          <img src="/logo.jpg" alt="Belladonna by Farin" />
        </motion.div>
        
        <div className="shop-navbar-links">
          <motion.button
            className="shop-navbar-back-btn"
            onClick={handleBackToHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>
          
          <motion.div
            className="shop-cart-icon"
            onClick={handleCartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {state.totalItems > 0 && (
              <span className="cart-count">{state.totalItems}</span>
            )}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default ShopNavbar; 