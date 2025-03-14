import React from 'react';
import styles from '../../styles/components/TeamMember.module.css';

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <div className={styles.teamMember}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;