// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Footer.module.css';
import ScrollAnimation from '../common/ScrollAnimation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <ScrollAnimation animation="slideUp" delay={0.1}>
            <div className={styles.brandSection}>
              <h3 className={styles.logo}>OraDrift</h3>
              <p className={styles.tagline}>
                Seamless flow of innovation
              </p>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className={styles.linksSection}>
              <h4>Quick Links</h4>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/work">Our Work</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.3}>
            <div className={styles.contactSection}>
              <h4>Contact Us</h4>
              <address>
                <p>
                  <i className="fas fa-envelope"></i>
                  contact@oradrift.com
                </p>
                <p>
                  <i className="fas fa-phone"></i>
                  +1 (555) 123-4567
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i>
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </address>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <div className={styles.newsletterSection}>
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for the latest updates.</p>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeIn" delay={0.5}>
          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              © {currentYear} OraDrift. All rights reserved.
            </div>
            <div className={styles.legal}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className={styles.footerBackground}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
    </footer>
  );
};

export default Footer;