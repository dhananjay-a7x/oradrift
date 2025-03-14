// src/components/home/Statistics.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './Statistics.module.css';

const Statistics = () => {
  const stats = [
    {
      id: 1,
      number: 150,
      suffix: '+',
      label: 'Projects Completed',
      icon: '📊'
    },
    {
      id: 2,
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '🎯'
    },
    {
      id: 3,
      number: 50,
      suffix: 'K',
      label: 'Hours Saved',
      icon: '⚡'
    },
    {
      id: 4,
      number: 200,
      suffix: '%',
      label: 'ROI Delivered',
      icon: '📈'
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className={styles.statistics} ref={ref}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.sectionHeader}>
            <h2>Our Impact in Numbers</h2>
            <p>Delivering measurable results for our clients</p>
          </div>
        </ScrollAnimation>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={stat.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <div className={styles.statCard}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{stat.icon}</span>
                </div>
                <div className={styles.number}>
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                    />
                  )}
                  {stat.suffix}
                </div>
                <div className={styles.label}>{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;