// src/components/common/Card.js
import React from 'react';
import styles from '../../styles/components/Card.module.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`
        ${styles.card} 
        ${styles[variant]}
        ${hover ? styles.hover : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`${styles.cardHeader} ${className}`}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '' }) => (
  <div className={`${styles.cardBody} ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`${styles.cardFooter} ${className}`}>
    {children}
  </div>
);

export default Card;