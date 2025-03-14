// src/components/home/Features.js
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/components/Features.module.css';

const FeatureCard = ({ icon, title, description, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`${styles.featureCard} ${inView ? styles.animate : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.learnMore}>
        Learn More
        <span className={styles.arrow}>→</span>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Power App Development",
      description: "Custom Power Apps solutions tailored to streamline your business processes and improve efficiency."
    },
    {
      icon: "🔄",
      title: "IT Automation",
      description: "Intelligent automation solutions that reduce manual work and increase productivity."
    },
    {
      icon: "💼",
      title: "Small Business Solutions",
      description: "Affordable and scalable solutions designed specifically for small-scale businesses."
    },
    {
      icon: "🛠️",
      title: "Custom Integration",
      description: "Seamless integration of various business tools and applications for unified operations."
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.backgroundElements}>
        <div className={styles.circle}></div>
        <div className={styles.dots}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Services</h2>
          <p>Empowering your business with innovative solutions</p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;