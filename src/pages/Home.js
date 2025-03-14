import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
};

export default Home;