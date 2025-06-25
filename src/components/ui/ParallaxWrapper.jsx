'use client'
import { useEffect, useRef } from 'react';

export default function ParallaxWrapper({ children, speed = 0.5, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      ref.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`parallax-wrapper ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

// Parallax section with different speeds
export function ParallaxSection({ children, speed = 0.3, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      // Only apply parallax when element is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`parallax-section ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

// Background parallax for depth effect
export function ParallaxBackground({ children, speed = 0.1, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      ref.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref} 
      className={`parallax-background ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
} 