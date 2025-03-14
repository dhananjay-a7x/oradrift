import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Innovate with OraDrift
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seamless flow of innovation
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/contact" className={styles.ctaButton}>
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;