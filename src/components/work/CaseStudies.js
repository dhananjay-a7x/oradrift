import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './CaseStudies.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Process Automation",
      client: "TechManufacture Inc.",
      industry: "Manufacturing",
      challenge: "Manual processes causing delays and errors",
      solution: "Implemented end-to-end automation solution",
      results: {
        efficiency: "+75%",
        costs: "-40%",
        productivity: "+60%"
      },
      image: "/assets/images/case-study-1.jpg",
      testimonial: {
        quote: "The automation solution transformed our operations completely.",
        author: "John Smith",
        position: "Operations Director"
      }
    },
    {
      id: 2,
      title: "Healthcare Data Analytics Platform",
      client: "MedCare Solutions",
      industry: "Healthcare",
      challenge: "Inefficient patient data management and analysis",
      solution: "Developed comprehensive analytics dashboard with predictive capabilities",
      results: {
        efficiency: "+85%",
        accuracy: "+95%",
        patientCare: "+70%"
      },
      image: "/assets/images/case-study-2.jpg",
      testimonial: {
        quote: "The analytics platform has revolutionized how we handle patient care and decision-making.",
        author: "Dr. Sarah Johnson",
        position: "Chief Medical Officer"
      }
    },
    {
      id: 3,
      title: "Financial Services Digital Transformation",
      client: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Legacy systems hindering digital banking services",
      solution: "Implemented cloud-based banking platform with AI integration",
      results: {
        transactions: "+120%",
        costs: "-55%",
        customerSatisfaction: "+80%"
      },
      image: "/assets/images/case-study-3.jpg",
      testimonial: {
        quote: "This digital transformation has positioned us as a leader in modern banking solutions.",
        author: "Michael Chen",
        position: "Digital Innovation Head"
      }
    },
    {
      id: 4,
      title: "E-commerce Platform Optimization",
      client: "RetailTech Solutions",
      industry: "Retail",
      challenge: "Poor conversion rates and user experience issues",
      solution: "Implemented AI-driven personalization and optimization",
      results: {
        conversion: "+95%",
        revenue: "+150%",
        userEngagement: "+85%"
      },
      image: "/assets/images/case-study-4.jpg",
      testimonial: {
        quote: "Our online sales have skyrocketed since implementing the new platform.",
        author: "Emma Thompson",
        position: "E-commerce Director"
      }
    }
  ];

  // Custom navigation buttons
  const CustomPrevArrow = ({ onClick }) => {
    return currentSlide === 0 ? null : (
      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={onClick}
        aria-label="Previous"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M15 18L9 12L15 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    const isLastSlide = currentSlide === caseStudies.length - sliderSettings.slidesToShow;
    return isLastSlide ? null : (
      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={onClick}
        aria-label="Next"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 18L15 12L9 6" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: true,
          adaptiveHeight: true,
          centerMode: false
        }
      }
    ]
  };  

  // Render results function
  const renderResults = (results) => (
    <div className={styles.results}>
      {Object.entries(results).map(([key, value]) => (
        <div key={key} className={styles.resultItem}>
          <span className={styles.resultValue}>{value}</span>
          <span className={styles.resultLabel}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );

  // Study card component
  const StudyCard = ({ study, index }) => (
    <ScrollAnimation
      key={study.id}
      animation="slideUp"
      delay={index * 0.1}
    >
      <motion.div 
        className={`${styles.studyCard} ${
          activeStudy === study.id ? styles.active : ''
        }`}
        onClick={() => setActiveStudy(
          activeStudy === study.id ? null : study.id
        )}
        layoutId={`study-${study.id}`}
      >
        <div className={styles.studyImage}>
          <img src={study.image} alt={study.title} />
          <div className={styles.overlay} />
        </div>

        <div className={styles.studyContent}>
          <h3>{study.title}</h3>
          <p className={styles.client}>{study.client}</p>

          <AnimatePresence>
            {activeStudy === study.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.expandedContent}
              >
                <div className={styles.section}>
                  <h4>Challenge</h4>
                  <p>{study.challenge}</p>
                </div>

                <div className={styles.section}>
                  <h4>Solution</h4>
                  <p>{study.solution}</p>
                </div>

                {renderResults(study.results)}

                <div className={styles.testimonial}>
                  <blockquote>
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className={styles.author}>
                    <span>{study.testimonial.author}</span>
                    <span>{study.testimonial.position}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className={styles.expandButton}>
            {activeStudy === study.id ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </motion.div>
    </ScrollAnimation>
  );

  return (
    <section className={styles.caseStudies}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.header}>
            <h2>Success Stories</h2>
            <p>Real results from real clients</p>
          </div>
        </ScrollAnimation>

        <div className={styles.studiesGrid}>
          <Slider 
            {...sliderSettings}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
          >
            {caseStudies.map((study, index) => (
              <StudyCard key={study.id} study={study} index={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
