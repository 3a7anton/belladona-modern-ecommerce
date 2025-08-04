import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  onAboutClick: () => void;
  onContactClick: () => void;
  onShopClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick, onContactClick, onShopClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.div 
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/logo.jpg" alt="Belladonna by Farin" />
        </motion.div>
        
        <div className="navbar-links">
          <motion.button
            className="navbar-link"
            onClick={onAboutClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Us
          </motion.button>
          
          <motion.button
            className="navbar-link"
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
          
          <motion.button
            className="navbar-cta"
            onClick={onShopClick}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(139, 69, 19, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
