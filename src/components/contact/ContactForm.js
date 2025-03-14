// src/components/contact/ContactForm.js
import React, { useState } from 'react';
import Input from '../common/Form/Input';
import TextArea from '../common/Form/TextArea';
import Button from '../common/Button';
import styles from '../../styles/components/ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {submitStatus && (
          <div className={`${styles.alert} ${styles[submitStatus.type]}`}>
            {submitStatus.message}
          </div>
        )}

        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          disabled={isSubmitting}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          disabled={isSubmitting}
        />

        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
        />

        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
          disabled={isSubmitting}
        />

        <Button
          type="submit"
          variant="primary"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;