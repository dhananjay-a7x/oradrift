// src/components/home/IntegrationPartners.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './IntegrationPartners.module.css';

const IntegrationPartners = () => {
  const [activePartner, setActivePartner] = useState(null);

  const partners = [
    {
      id: 1,
      name: 'Microsoft Power Platform',
      logo: '/assets/images/partners/microsoft.svg',
      description: 'Seamless integration with Power Apps, Power Automate, and Power BI',
      features: [
        'Custom App Development',
        'Workflow Automation',
        'Business Analytics',
        'Data Integration'
      ],
      caseStudy: {
        title: 'Enterprise Process Automation',
        result: '60% efficiency increase',
        link: '/case-studies/microsoft'
      }
    },
    // Add more partners...
  ];

  const technologies = [
    {
      category: 'Automation',
      items: [
        { name: 'Power Automate', icon: '⚡' },
        { name: 'Azure Logic Apps', icon: '☁️' },
        { name: 'UiPath', icon: '🤖' }
      ]
    },
    {
      category: 'Development',
      items: [
        { name: 'Power Apps', icon: '📱' },
        { name: 'React', icon: '⚛️' },
        { name: '.NET', icon: '🔷' }
      ]
    },
    // Add more categories...
  ];

  return (
    <section className={styles.integrations}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.header}>
            <h2>Integration Partners</h2>
            <p>Powerful integrations to supercharge your business</p>
          </div>
        </ScrollAnimation>

        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => (
            <ScrollAnimation
              key={partner.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div
                className={`${styles.partnerCard} ${
                  activePartner === partner.id ? styles.active : ''
                }`}
                onClick={() => setActivePartner(
                  activePartner === partner.id ? null : partner.id
                )}
                whileHover={{ y: -5 }}
              >
                <div className={styles.partnerLogo}>
                  <img src={partner.logo} alt={partner.name} />
                </div>

                <h3>{partner.name}</h3>
                <p>{partner.description}</p>

                <AnimatePresence>
                  {activePartner === partner.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className={styles.expandedContent}
                    >
                      <div className={styles.features}>
                        {partner.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={styles.feature}
                          >
                            <span className={styles.checkmark}>✓</span>
                            {feature}
                          </motion.div>
                        ))}
                      </div>

                      <div className={styles.caseStudy}>
                        <h4>Success Story</h4>
                        <p>{partner.caseStudy.title}</p>
                        <span className={styles.result}>
                          {partner.caseStudy.result}
                        </span>
                        <a href={partner.caseStudy.link} className={styles.link}>
                          Learn More →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className={styles.techStack}>
            <h3>Our Technology Stack</h3>
            <div className={styles.categories}>
              {technologies.map((category, index) => (
                <div key={index} className={styles.category}>
                  <h4>{category.category}</h4>
                  <div className={styles.techGrid}>
                    {category.items.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className={styles.techItem}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={styles.techIcon}>{tech.icon}</span>
                        <span className={styles.techName}>{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className={styles.backgroundElements}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.pattern} />
      </div>
    </section>
  );
};

export default IntegrationPartners;