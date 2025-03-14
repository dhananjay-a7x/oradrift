// src/components/common/ScrollProgress.js
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/ScrollProgress.module.css';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.progressContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;