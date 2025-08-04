import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your GSAP animations will be scoped to this context
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return { containerRef, gsap, ScrollTrigger };
};

export const useScrollTriggerAnimation = (
  trigger: string | Element,
  animation: gsap.core.Tween | gsap.core.Timeline,
  options?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger,
      ...options,
      animation,
    });

    return () => scrollTrigger.kill();
  }, [trigger, animation, options]);
};
