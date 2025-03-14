// src/components/about/Timeline.js
import React from 'react';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './Timeline.module.css';

const Timeline = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'OraDrift was established with a vision to revolutionize business automation.',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded our team and client base, serving 50+ businesses.',
      icon: '📈'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Recognized for excellence in Power Apps development.',
      icon: '🏆'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Extended our services to international markets.',
      icon: '🌍'
    }
  ];

  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.sectionHeader}>
            <h2>Our Journey</h2>
            <p>Milestones that shaped our success</p>
          </div>
        </ScrollAnimation>

        <div className={styles.timelineContainer}>
          {milestones.map((milestone, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.2}
            >
              <div className={styles.timelineItem}>
                <div className={styles.timelineContent}>
                  <div className={styles.year}>{milestone.year}</div>
                  <div className={styles.icon}>{milestone.icon}</div>
                  <div className={styles.content}>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
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

export default Timeline;