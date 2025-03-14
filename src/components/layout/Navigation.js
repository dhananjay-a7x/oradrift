// src/components/layout/Navigation.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/components/Navigation.module.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          OraDrift
        </Link>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? styles.active : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/work" 
                className={location.pathname === '/work' ? styles.active : ''}
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={location.pathname === '/team' ? styles.active : ''}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/pricing" 
                className={location.pathname === '/pricing' ? styles.active : ''}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                to="/faq" 
                className={location.pathname === '/faq' ? styles.active : ''}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? styles.active : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;