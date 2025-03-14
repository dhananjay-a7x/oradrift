// src/components/common/PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/PageTransition.module.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      className={styles.page}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;