import React, { useEffect, useRef, useState } from 'react';
import styles from './AnimatedSection.module.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClass = animation === 'fade-up' ? styles.fadeUp :
                        animation === 'fade-left' ? styles.fadeLeft :
                        animation === 'fade-right' ? styles.fadeRight :
                        styles.fadeIn;

  return (
    <div 
      ref={ref} 
      className={`${styles.animatedSection} ${animationClass} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;