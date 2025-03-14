import React from 'react';
import styles from '../../styles/components/ProjectCard.module.css';

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;