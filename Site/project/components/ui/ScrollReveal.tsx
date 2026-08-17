'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  animation?: 'fade-up' | 'fade' | 'scale';
  threshold?: number;
  initiallyVisible?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
  threshold = 0.05,
  initiallyVisible = false,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) return;

    const currentRef = ref.current;
    if (currentRef) {
      const rect = currentRef.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        setIsVisible(true);
        return;
      }
    }

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
        rootMargin: '150px 0px 150px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, isVisible]);

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
