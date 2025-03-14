// src/components/work/ProjectsGrid.js
import React, { useState, useEffect } from 'react';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from '../../styles/components/ProjectsGrid.module.css';

const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'Automation' },
    { id: 'powerApps', name: 'Power Apps' },
    { id: 'integration', name: 'Integration' }
  ];

  const projects = [
    {
      id: 1,
      title: "Business Process Automation",
      description: "Streamlined workflow automation for retail operations",
      image: "/assets/images/project1.jpg",
      category: "automation",
      technologies: ["Power Automate", "SharePoint", "Teams"],
      link: "#",
      stats: {
        efficiency: "+45%",
        timeReduction: "60%",
        roi: "250%"
      }
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack online marketplace with real-time inventory management",
      image: "/assets/images/project2.jpg",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#",
      stats: {
        transactions: "10K+",
        uptime: "99.9%",
        userGrowth: "180%"
      }
    },
    {
      id: 3,
      title: "AI Customer Service Bot",
      description: "Intelligent chatbot for automated customer support",
      image: "/assets/images/project3.jpg",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Natural Language Processing"],
      link: "#",
      stats: {
        accuracy: "95%",
        responseTime: "2s",
        queriesHandled: "5000+"
      }
    },
    {
      id: 4,
      title: "Mobile Health Tracker",
      description: "Cross-platform fitness and health monitoring application",
      image: "/assets/images/project4.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "HealthKit"],
      link: "#",
      stats: {
        downloads: "50K+",
        activeUsers: "15K",
        rating: "4.8"
      }
    }
  ]

  useEffect(() => {
    setIsLoading(true);
    const filtered = selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
    
    setTimeout(() => {
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 500);
  }, [selectedCategory]);

  return (
    <div className={styles.projectsSection}>
      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`
              ${styles.filterButton}
              ${selectedCategory === category.id ? styles.active : ''}
            `}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.projectsGrid}>
        {isLoading ? (
          <div className={styles.loading}>Loading projects...</div>
        ) : (
          filteredProjects.map((project, index) => (
            <ScrollAnimation
              key={project.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img src={project.image} alt={project.title} />
        <div className={`${styles.overlay} ${isHovered ? styles.active : ''}`}>
          <a href={project.link} className={styles.viewProject}>
            View Project
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.stats}>
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;