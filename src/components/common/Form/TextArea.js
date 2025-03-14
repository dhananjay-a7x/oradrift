// src/components/common/Form/TextArea.js
import React from 'react';
import styles from '../../styles/components/Form.module.css';

const TextArea = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  rows = 4,
  required = false,
  disabled = false
}) => {
  return (
    <div className={styles.formGroup}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`${styles.textarea} ${error ? styles.error : ''}`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default TextArea;