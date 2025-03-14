import React from 'react';
import styles from '../../styles/components/Button.module.css';

const Button = ({ children, variant = 'primary', onClick, type = 'button' }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;