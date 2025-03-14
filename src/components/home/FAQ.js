// src/components/home/FAQ.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}>
      <button
        className={styles.question}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.answerContent}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How can Power Apps benefit my business?",
      answer: "Power Apps can streamline your business processes by creating custom applications tailored to your specific needs. This leads to increased efficiency, reduced manual work, and improved data management."
    },
    {
      question: "What types of automation solutions do you offer?",
      answer: "We offer comprehensive automation solutions including workflow automation, document processing, data integration, and business process optimization using tools like Power Automate and custom development."
    },
    {
      question: "How long does it typically take to implement a Power Apps solution?",
      answer: "Implementation time varies based on complexity, but most basic solutions can be deployed within 2-4 weeks. More complex enterprise solutions might take 8-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide training and support after implementation?",
      answer: "Yes, we offer comprehensive training programs for your team and ongoing technical support. This includes user guides, hands-on training sessions, and dedicated support channels to ensure your team can effectively use and maintain the solutions."
    },
    {
      question: "Can Power Apps integrate with our existing systems?",
      answer: "Yes, Power Apps can seamlessly integrate with various systems including Microsoft 365, SharePoint, SQL databases, and hundreds of other services through built-in connectors. We can also develop custom connectors for your specific needs."
    }
  ];

  return (
    <div className={styles.team}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Frequently Asked Questions</h1>
        <p>Get answers to common questions about our services</p>
      </motion.div>
      
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">

        </ScrollAnimation>

        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.1}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;