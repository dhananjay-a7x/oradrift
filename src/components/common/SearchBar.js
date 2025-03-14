// src/components/common/SearchBar.js
import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.searchInput}
      />
      <span className={styles.searchIcon}>🔍</span>
    </div>
  );
};

export default SearchBar;