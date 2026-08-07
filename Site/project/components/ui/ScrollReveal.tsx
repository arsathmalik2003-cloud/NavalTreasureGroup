'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  animation?: 'fade-up' | 'fade' | 'scale';
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  threshold = 0.12,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getTransitionStyles = () => {
    const baseStyle = {
      transition: `all 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'translate3d(0, 24px, 0)',
          };
        case 'scale':
          return {
            ...baseStyle,
            opacity: 0,
            transform: 'scale(0.97)',
          };
        case 'fade':
        default:
          return {
            ...baseStyle,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyle,
      opacity: 1,
      transform: 'translate3d(0, 0, 0) scale(1)',
    };
  };

  return (
    <div
      ref={ref}
      style={getTransitionStyles()}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
