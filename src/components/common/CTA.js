// src/components/common/CTA.js
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';
import styles from './CTA.module.css';

const CTA = ({
  title,
  description,
  buttonText,
  buttonLink,
  variant = 'primary',
  withBackground = true
}) => {
  return (
    <section className={`${styles.cta} ${styles[variant]} ${withBackground ? styles.withBg : ''}`}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={buttonLink} className={styles.ctaButton}>
              {buttonText}
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </ScrollAnimation>

        {withBackground && (
          <div className={styles.backgroundElements}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.dots}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;