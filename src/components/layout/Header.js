// src/components/layout/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          OraDrift
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Our Work</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;