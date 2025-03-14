// src/components/home/TestimonialsSlider.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../styles/components/Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    content: "OraDrift transformed our business processes completely. The automation solutions they provided have increased our efficiency by 200%.",
    author: "Sarah Johnson",
    position: "CEO, TechCorp",
    image: "/assets/images/testimonial1.jpg",
    rating: 5
  },
  // Add more testimonials...
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <h2>What Our Clients Say</h2>
        
        <div className={styles.sliderContainer}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={styles.testimonialSlide}
            >
              <div className={styles.testimonialContent}>
                <div className={styles.quote}>"</div>
                <p>{testimonials[currentIndex].content}</p>
                
                <div className={styles.author}>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                  />
                  <div className={styles.authorInfo}>
                    <h4>{testimonials[currentIndex].author}</h4>
                    <span>{testimonials[currentIndex].position}</span>
                    <div className={styles.rating}>
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className={styles.star}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className={`${styles.navButton} ${styles.prev}`}
            onClick={prevSlide}
          >
            ←
          </button>
          <button 
            className={`${styles.navButton} ${styles.next}`}
            onClick={nextSlide}
          >
            →
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;