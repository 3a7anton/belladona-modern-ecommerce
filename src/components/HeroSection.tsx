import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (heroRef.current && titleRef.current && subtitleRef.current) {
      // Parallax effect for the title
      gsap.to(titleRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title animation on load
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          delay: 1.2,
        }
      );
    }
  }, []);

  return (
    <div ref={heroRef} className="hero-section">
      {/* Static Background */}
      <div className="hero-background">
        <div 
          className="hero-bg-image"
          style={{
            background: 'linear-gradient(135deg, #F8F8FF 0%, #E0E0E0 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.h1
          ref={titleRef}
          className="hero-title"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        >
          <span className="brand-name">Belladonna</span>
          <span className="by-text">by</span>
          <span className="designer-name">Farin</span>
        </motion.h1>
        
        <motion.p
          ref={subtitleRef}
          className="hero-subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 1.2 }}
        >
          Luxury Women's Fashion & Accessories
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
      >
        <div className="scroll-arrow"></div>
        <span>Discover Our Collection</span>
      </motion.div>
    </div>
  );
};

export default HeroSection;