// src/components/blog/BlogGrid.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import SearchBar from '../common/SearchBar';
import styles from './BlogGrid.module.css';

const BlogGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Business with Power Apps",
      excerpt: "Discover how Power Apps can transform your business operations...",
      category: "Power Apps",
      image: "/assets/images/blog1.jpg",
      date: "2023-10-15",
      readTime: "5 min read",
      author: {
        name: "John Doe",
        avatar: "/assets/images/author1.jpg"
      }
    },
    // Add more blog posts...
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'powerApps', name: 'Power Apps' },
    { id: 'automation', name: 'Automation' },
    { id: 'integration', name: 'Integration' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.header}>
            <h2>Latest Insights</h2>
            <p>Stay updated with the latest trends and insights in business automation</p>
          </div>

          <div className={styles.filters}>
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search articles..."
            />
            
            <div className={styles.categories}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.categoryButton} ${
                    selectedCategory === category.id ? styles.active : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <div className={styles.blogGrid}>
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <ScrollAnimation
                key={post.id}
                animation="slideUp"
                delay={index * 0.1}
              >
                <motion.article 
                  className={styles.blogCard}
                  layout
                >
                  <div className={styles.imageContainer}>
                    <img src={post.image} alt={post.title} />
                    <div className={styles.category}>{post.category}</div>
                  </div>
                  
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span className={styles.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className={styles.readTime}>{post.readTime}</span>
                    </div>

                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>

                    <div className={styles.footer}>
                      <div className={styles.author}>
                        <img src={post.author.avatar} alt={post.author.name} />
                        <span>{post.author.name}</span>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className={styles.readMore}>
                        Read More
                        <span className={styles.arrow}>→</span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </ScrollAnimation>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            <h3>No posts found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;