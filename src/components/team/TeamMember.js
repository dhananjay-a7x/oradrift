import React, { useState } from 'react';
import styles from '../../styles/components/TeamMember.module.css';
import ScrollAnimation from '../common/ScrollAnimation';

const TeamMember = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollAnimation animation="slideUp">
      <div 
        className={styles.teamMember}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.imageContainer}>
          <img src={member.image} alt={member.name} />
          <div className={`${styles.overlay} ${isHovered ? styles.active : ''}`}>
            <div className={styles.socialLinks}>
              {member.social.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles[social.platform]}
                >
                  <i className={`fab fa-${social.platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.info}>
          <h3>{member.name}</h3>
          <span className={styles.position}>{member.position}</span>
          <p className={styles.bio}>{member.bio}</p>
          
          <div className={styles.skills}>
            {member.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default TeamMember;