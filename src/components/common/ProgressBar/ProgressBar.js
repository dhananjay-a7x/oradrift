// src/components/common/ProgressBar/ProgressBar.js
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ 
  label, 
  percentage, 
  color = 'primary',
  animated = true 
}) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && animated) {
      setProgress(percentage);
    }
  }, [inView, percentage, animated]);

  return (
    <div className={styles.progressWrapper} ref={ref}>
      <div className={styles.labelWrapper}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{progress}%</span>
      </div>
      <div className={styles.progressContainer}>
        <div 
          className={`${styles.progressBar} ${styles[color]}`}
          style={{ 
            width: `${progress}%`,
            transition: animated ? 'width 1.5s ease-in-out' : 'none'
          }}
        >
          <div className={styles.glow} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;