// src/components/home/Features.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/Features.module.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "⚡",
      title: "Power App Development",
      description: "Custom Power Apps solutions tailored to streamline your business processes and improve efficiency."
    },
    {
      id: 2,
      icon: "🔄",
      title: "IT Automation",
      description: "Automated solutions that reduce manual work and increase productivity across your organization."
    },
    {
      id: 3,
      icon: "💼",
      title: "Small Business Solutions",
      description: "Affordable and scalable solutions designed specifically for small-scale businesses."
    },
    {
      id: 4,
      icon: "🛠️",
      title: "Custom Integration",
      description: "Seamless integration of various business tools and applications for unified operations."
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Empowering your business with innovative solutions</p>
        </motion.div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <motion.div 
                className={styles.learnMore}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;