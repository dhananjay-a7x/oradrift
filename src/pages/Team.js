// src/pages/Team.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Team.module.css';
import team1Image from '../assets/images/team1.webp';
import team2Image from '../assets/images/team2.jpg';


const Team = () => {
  const team = [
    {
      id: 1,
      name: "Annie",
      role: "CEO & Founder",
      image: team1Image,
      bio: "Expert in IT automation and business solutions"
    },
    {
      id: 2,
      name: "DJ",
      role: "Lead Developer",
      image: team2Image,
      bio: "Power Apps specialist with 8+ years experience"
    },
    // Add more team members
  ];

  return (
    <div className={styles.team}>
      <motion.div 
        className={styles.heroSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Team</h1>
        <p>Meet the experts behind OraDrift's success</p>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className={styles.memberCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;