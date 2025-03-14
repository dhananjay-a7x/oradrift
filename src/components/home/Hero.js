// src/components/home/Hero.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroRef.current.style.opacity = 1 - (scrolled / 700);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.particles}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>Innovate</span>
          <span className={styles.titleLine}>with OraDrift</span>
        </h1>
        <p className={styles.subtitle}>Seamless flow of innovation</p>
        <div className={styles.cta}>
          <Link to="/contact" className={styles.ctaButton}>
            Get Started
            <span className={styles.arrow}>→</span>
          </Link>
          <Link to="/work" className={styles.secondaryButton}>
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;