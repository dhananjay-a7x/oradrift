// src/pages/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className={styles.contact}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contact Us</h1>
        <p>Let's discuss how we can help your business grow</p>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Get in Touch</h2>
            <p>Ready to automate your business processes? Let's talk!</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <p>contact@oradrift.com</p>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <p>(555) 123-4567</p>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Business Ave, Tech City</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;