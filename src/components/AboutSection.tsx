import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Actual product images from different categories
  const gridImages = [
    {
      src: '/img/premium purse/476211247_479415401887020_2184385406340683444_n.jpg',
      category: 'Premium Purses'
    },
    {
      src: '/img/jewellry/472849920_461536917008202_880367910907139364_n.jpg',
      category: 'Luxury Jewelry'
    },
    {
      src: '/img/Earings/473079562_461559570339270_7826771486580445992_n.jpg',
      category: 'Designer Earings'
    },
    {
      src: '/img/normal purse/475835610_478756268619600_3792130607991971262_n.jpg',
      category: 'Classic Purses'
    },
    {
      src: '/img/Earings/474075332_467787959716431_196826912128670727_n.jpg',
      category: 'Elegant Earings'
    },
    {
      src: '/img/jewellry/473080822_461537067008187_5124661546939402170_n.jpg',
      category: 'Fine Jewelry'
    },
  ];

  const punchlines = [
    'Elegance Redefined',
    'Luxury Crafted',
    'Timeless Beauty',
    'Exquisite Details',
  ];

  useEffect(() => {
    if (sectionRef.current && titleRef.current && gridRef.current) {
      // Title parallax effect
      gsap.to(titleRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Grid items animation
      const gridItems = gridRef.current.querySelectorAll('.grid-item');
      gridItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { 
            y: 100, 
            opacity: 0, 
            scale: 0.8 
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Punchlines animation
      const punchlineElements = sectionRef.current.querySelectorAll('.punchline');
      punchlineElements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el as HTMLDivElement;
        inViewRef(el);
      }}
      className="about-section"
      id="about"
    >
      <div className="about-container">
        {/* Floating Punchlines */}
        <div className="punchlines-container">
          {punchlines.map((punchline, index) => (
            <motion.div
              key={index}
              className={`punchline punchline-${index + 1}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.5, delay: index * 0.3, ease: 'easeOut' }}
            >
              {punchline}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <motion.h2
          ref={titleRef}
          className="about-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          About Belladonna by Farin
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <p>
            Belladonna by Farin is a distinguished luxury brand dedicated to creating 
            exquisite women's fashion and accessories. We specialize in premium purses, 
            elegant jewelry, sophisticated bags, and haute couture clothing that embodies 
            timeless elegance and modern sophistication.
          </p>
          <p>
            Each piece in our collection is meticulously crafted with attention to detail, 
            using only the finest materials and traditional artisanal techniques. Our designs 
            reflect the essence of feminine grace while maintaining contemporary appeal.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div ref={gridRef} className="image-grid">
          {gridImages.map((item, index) => (
            <motion.div
              key={index}
              className="grid-item"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: 0.8 + index * 0.2, 
                ease: 'easeOut' 
              }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                boxShadow: '0 20px 40px rgba(75, 0, 130, 0.3)'
              }}
            >
              <img 
                src={item.src} 
                alt={`${item.category} ${index + 1}`}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  console.log(`Failed to load image: ${item.src || 'unknown'}`);
                }}
                onLoad={(e) => {
                  const target = e.currentTarget;
                  target.style.opacity = '1';
                }}
                style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
              />
              <div className="grid-overlay">
                <span>{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Text */}
        <div className="scrolling-text-container">
          <motion.div
            className="scrolling-text"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear' 
            }}
          >
            LUXURY • ELEGANCE • SOPHISTICATION • CRAFTSMANSHIP • BEAUTY • 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
