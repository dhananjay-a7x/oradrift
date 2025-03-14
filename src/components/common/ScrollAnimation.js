// src/components/common/ScrollAnimation.js
import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from '../../styles/components/ScrollAnimation.module.css';

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0,
  threshold = 0.1 
}) => {
  const [elementRef, isVisible] = useScrollAnimation(threshold);

  return (
    <div
      ref={elementRef}
      className={`
        ${styles.animated} 
        ${isVisible ? styles[animation] : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;