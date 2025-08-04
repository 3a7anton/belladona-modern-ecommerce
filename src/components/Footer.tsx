import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import './Footer.css';

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (footerRef.current && inView) {
      const elements = footerRef.current.querySelectorAll('.footer-item');
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, [inView]);

  return (
    <footer
      ref={(el) => {
        footerRef.current = el as HTMLDivElement;
        inViewRef(el);
      }}
      className="footer"
      id="contact"
    >
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            className="footer-item footer-brand"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h3>Belladonna by Farin</h3>
            <p>Luxury Women's Fashion & Accessories</p>
            <div className="brand-tagline">
              "Where Elegance Meets Excellence"
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="footer-item footer-contact"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <h4>Contact Information</h4>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p>Shop 186, Eastern Banabithi Market</p>
                  <p>South Banasree, Dhaka</p>
                  <p>Bangladesh</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <a href="tel:01721926590">01721-926590</a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <a 
                    href="https://www.facebook.com/profile.php?id=100094556935941" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Facebook Page
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            className="footer-item footer-hours"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          >
            <h4>Business Hours</h4>
            <div className="hours-list">
              <div className="hours-item">
                <span>Saturday - Thursday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Friday</span>
                <span>2:00 PM - 8:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Our Products */}
          <motion.div
            className="footer-item footer-products"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          >
            <h4>Our Collection</h4>
            <ul className="products-list">
              <li>Premium Purses</li>
              <li>Luxury Jewelry</li>
              <li>Designer Bags</li>
              <li>Elegant Clothing</li>
            </ul>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="footer-decoration">
          <motion.div
            className="decoration-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Copyright */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        >
          <p>&copy; 2025 Belladonna by Farin. All rights reserved.</p>
          <p>Crafted with ❤️ for luxury fashion enthusiasts</p>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="footer-bg-animation">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-circle"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
