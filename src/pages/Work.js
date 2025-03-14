// src/pages/Work.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Work.module.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Business Process Automation",
      description: "Automated workflow system for small retail business",
      image: "/assets/images/project1.jpg",
      tags: ["Power Apps", "Automation"]
    },
    {
      id: 2,
      title: "Inventory Management",
      description: "Custom inventory tracking solution",
      image: "/assets/images/project2.jpg",
      tags: ["Power Apps", "Database"]
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.work}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Work</h1>
        <p>Transforming businesses through innovative solutions</p>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;