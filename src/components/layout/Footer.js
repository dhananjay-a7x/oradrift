// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.companyInfo}>
            <h3>OraDrift</h3>
            <p>Seamless flow of innovation</p>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Our Work</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <p>Email: contact@oradrift.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Business Ave, Tech City</p>
          </div>

          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} OraDrift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;