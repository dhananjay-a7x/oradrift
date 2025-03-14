import React from 'react';
import useForm from '../../hooks/useForm';
import styles from '../../styles/components/ContactForm.module.css';

const validateForm = (values) => {
  let errors = {};
  
  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};

const ContactForm = () => {
  const initialState = { name: '', email: '', message: '' };
  
  const { 
    values, 
    errors, 
    isSubmitting, 
    handleChange, 
    handleSubmit 
  } = useForm(initialState, validateForm);

  const submitForm = async (formData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
  };

  return (
    <form 
      className={styles.contactForm} 
      onSubmit={(e) => handleSubmit(e, submitForm)}
    >
      <div className={styles.formGroup}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={values.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ''}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ''}
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <textarea
          name="message"
          placeholder="Your Message"
          value={values.message}
          onChange={handleChange}
          className={errors.message ? styles.error : ''}
        ></textarea>
        {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
      </div>

      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {errors.submit && (
        <div className={styles.submitError}>
          {errors.submit}
        </div>
      )}
    </form>
  );
};

export default ContactForm;