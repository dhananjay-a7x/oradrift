// src/components/common/Button.js
import React from 'react';
import styles from '../../styles/components/Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ''}
        ${loading ? styles.loading : ''}
        ${className}
      `}
    >
      {loading && <span className={styles.spinner} />}
      <span className={loading ? styles.invisible : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button;