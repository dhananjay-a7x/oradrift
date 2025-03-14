// src/components/home/Services.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from '../../styles/components/Services.module.css';

const services = [
  {
    id: 1,
    icon: '⚡',
    title: 'Power Apps Development',
    description: 'Custom business applications that streamline your workflows.',
    features: [
      'Custom App Development',
      'Process Automation',
      'Data Integration',
      'Mobile Solutions'
    ],
    color: '#6366f1'
  },
  {
    id: 2,
    icon: '🔄',
    title: 'Business Automation',
    description: 'Automate repetitive tasks and increase productivity.',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Task Management',
      'Performance Analytics'
    ],
    color: '#8b5cf6'
  },
  // Add more services...
];

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.serviceCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--accent-color': service.color }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.iconWrapper}>
        <span className={styles.icon}>{service.icon}</span>
        <div className={styles.iconBackground} />
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.features}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {service.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={styles.learnMore}
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        Learn More
        <span className={styles.arrow}>→</span>
      </motion.button>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
        <div className={styles.pattern} />
      </div>

      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Empowering your business with innovative solutions</p>
          </div>
        </ScrollAnimation>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ScrollAnimation
              key={service.id}
              animation="slideUp"
              delay={index * 0.2}
            >
              <ServiceCard service={service} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;