// src/components/about/Skills.js
import React from 'react';
import ScrollAnimation from '../common/ScrollAnimation';
import ProgressBar from '../common/ProgressBar/ProgressBar';
import styles from './Skills.module.css';

const Skills = () => {
  const skills = [
    { label: 'Power Apps Development', percentage: 95 },
    { label: 'Business Process Automation', percentage: 90 },
    { label: 'System Integration', percentage: 85 },
    { label: 'Data Analytics', percentage: 80 },
    { label: 'Cloud Solutions', percentage: 88 }
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.sectionHeader}>
            <h2>Our Expertise</h2>
            <p>Comprehensive solutions backed by years of experience</p>
          </div>
        </ScrollAnimation>

        <div className={styles.skillsGrid}>
          <div className={styles.skillsList}>
            {skills.map((skill, index) => (
              <ScrollAnimation
                key={index}
                animation="slideUp"
                delay={index * 0.1}
              >
                <ProgressBar
                  label={skill.label}
                  percentage={skill.percentage}
                  color={index % 2 === 0 ? 'primary' : 'secondary'}
                />
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="slideIn" delay={0.3}>
            <div className={styles.skillsImage}>
              <img 
                src="/assets/images/skills-illustration.svg" 
                alt="Skills Illustration"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;