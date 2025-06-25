'use client'
import { useEffect, useRef, useState } from 'react';

export default function ScrollOverlay({ children, index, totalSections }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate when this section should start appearing
      const triggerPoint = windowHeight * 0.8; // Start transition when 80% of viewport is scrolled
      const sectionTop = rect.top;
      
      // Calculate scroll progress for this section
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
      setScrollProgress(progress);
      
      // Determine if section should be visible
      const shouldBeVisible = sectionTop < triggerPoint;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform based on scroll progress and section index
  const getTransform = () => {
    if (!isVisible) {
      // Section is above viewport - position it just below the viewport
      return `translateY(${window.innerHeight}px)`;
    }
    
    if (scrollProgress >= 1) {
      // Section is fully scrolled past - move it down
      return `translateY(-${window.innerHeight * 0.3}px)`;
    }
    
    // Section is in transition - calculate overlap effect
    const overlapProgress = scrollProgress;
    const translateY = window.innerHeight * (1 - overlapProgress);
    
    return `translateY(${translateY}px)`;
  };

  // Calculate opacity for fade effect
  const getOpacity = () => {
    if (!isVisible) return 0;
    if (scrollProgress >= 1) return 0.3; // Keep some opacity for depth
    return Math.min(1, scrollProgress * 2); // Fade in quickly
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
        transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
        zIndex: totalSections - index, // Higher sections have higher z-index
      }}
    >
      {children}
    </div>
  );
}

// Wrapper component to manage all sections
export function ScrollOverlayContainer({ children }) {
  const sections = Array.isArray(children) ? children : [children];
  
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <ScrollOverlay 
          key={index} 
          index={index} 
          totalSections={sections.length}
        >
          {section}
        </ScrollOverlay>
      ))}
    </div>
  );
} 