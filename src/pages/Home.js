// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Home.module.css';
import Services from '../components/home/Services';
import IntegrationPartners from '../components/home/IntegrationPartners';
import ScrollAnimation from '../components/common/ScrollAnimation';
import ProcessFlow from '../components/home/ProcessFlow';
import Skills from '../components/about/Skills';
import Timeline from '../components/about/Timeline';
import CaseStudies from '../components/work/CaseStudies';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <motion.section 
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Transform Your Business with Custom Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Streamline operations and boost productivity with our Power Apps and automation expertise
          </motion.p>
          <motion.div
            className={styles.ctaButtons}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/contact" className={styles.primaryButton}>
              Get Started
            </Link>
            
            <Link to="/work" className={styles.secondaryButton}>
              View Our Work
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className={styles.stats}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <Services />

      {/* Integration Partners Section */}
      <IntegrationPartners />

      
            <ProcessFlow/>
      
            <Skills/>

      <ScrollAnimation>
        <Timeline/>
      </ScrollAnimation>      

      {/* Featured Case Study Section */}
      <ScrollAnimation>
        <CaseStudies/>
      </ScrollAnimation>

      {/* Call to Action Section */}
      <ScrollAnimation>
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how we can help you achieve your goals</p>
            <Link to="/contact" className={styles.ctaButton}>
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default Home;
