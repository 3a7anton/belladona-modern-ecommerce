import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollSection.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  title: string;
  content: string;
  backgroundColor?: string;
  textColor?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  title,
  content,
  backgroundColor = '#ffffff',
  textColor = '#000000',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (sectionRef.current && titleRef.current && contentRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
      ).fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );
    }
  }, []);

  return (
    <div
      ref={(el) => {
        sectionRef.current = el;
        inViewRef(el);
      }}
      className="scroll-section"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="scroll-section-content">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="scroll-section-title"
        >
          {title}
        </motion.h2>
        <motion.p
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="scroll-section-text"
        >
          {content}
        </motion.p>
      </div>
    </div>
  );
};

export default ScrollSection;
