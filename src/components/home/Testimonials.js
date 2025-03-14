import React from 'react';
import styles from '../../styles/components/Testimonials.module.css';

const Testimonials = () => {
  // Static testimonials data
  const testimonials = [
    {
      id: 1,
      content: "OraDrift transformed our business processes completely! Their Power Apps solutions have streamlined our operations and increased efficiency by 50%.",
      authorName: "Mike Johnson",
      authorPosition: "CEO, Tech Solutions Inc.",
      authorImage: "/assets/images/testimonial1.jpg"
    },
    {
      id: 2,
      content: "The automation solutions provided by OraDrift are exceptional. Their team's expertise in IT automation has helped us save countless hours of manual work.",
      authorName: "Sarah Williams",
      authorPosition: "Operations Manager, Digital Corp",
      authorImage: "/assets/images/testimonial2.jpg"
    },
    {
      id: 3,
      content: "Working with OraDrift has been a game-changer for our small business. Their solutions are cost-effective and perfectly tailored to our needs.",
      authorName: "David Chen",
      authorPosition: "Founder, StartUp Solutions",
      authorImage: "/assets/images/testimonial3.jpg"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.content}>{testimonial.content}</p>
              <div className={styles.author}>
                <div className={styles.authorImageWrapper}>
                  <img 
                    src={testimonial.authorImage} 
                    alt={testimonial.authorName} 
                    className={styles.authorImage}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonial.authorName}</h4>
                  <p className={styles.authorPosition}>{testimonial.authorPosition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;