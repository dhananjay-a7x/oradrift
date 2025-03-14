// src/components/home/ProcessFlow.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './ProcessFlow.module.css';

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      icon: '🔍',
      title: 'Discovery',
      description: 'We analyze your business needs and identify automation opportunities.',
      details: [
        'Business process analysis',
        'Requirements gathering',
        'Technology assessment',
        'Solution planning'
      ]
    },
    {
      id: 2,
      icon: '💡',
      title: 'Design',
      description: 'Creating custom solutions tailored to your specific needs.',
      details: [
        'Solution architecture',
        'User interface design',
        'Workflow mapping',
        'Integration planning'
      ]
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Development',
      description: 'Building and implementing your custom automation solution.',
      details: [
        'Power Apps development',
        'Process automation',
        'Integration setup',
        'Quality assurance'
      ]
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Deployment',
      description: 'Launching your solution and ensuring smooth adoption.',
      details: [
        'User training',
        'System deployment',
        'Performance monitoring',
        'Ongoing support'
      ]
    }
  ];

  return (
    <section className={styles.processFlow}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.sectionHeader}>
            <h2>Our Process</h2>
            <p>How we transform your business with automation</p>
          </div>
        </ScrollAnimation>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <ScrollAnimation
              key={step.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <div 
                className={`${styles.step} ${activeStep === step.id ? styles.active : ''}`}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={styles.stepContent}>
                  <div className={styles.iconContainer}>
                    <span className={styles.icon}>{step.icon}</span>
                    <div className={styles.connector} />
                  </div>
                  
                  <div className={styles.stepInfo}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.details}
                        >
                          <ul>
                            {step.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                              >
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;