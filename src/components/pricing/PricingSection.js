// src/components/pricing/PricingSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../common/ScrollAnimation';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      price: {
        monthly: 49,
        annual: 39
      },
      features: [
        { name: 'Basic Power Apps', included: true },
        { name: 'Email Support', included: true },
        { name: '5 Automation Workflows', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Custom Integration', included: false },
        { name: 'Priority Support', included: false }
      ],
      cta: 'Get Started'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      popular: true,
      price: {
        monthly: 99,
        annual: 89
      },
      features: [
        { name: 'Advanced Power Apps', included: true },
        { name: 'Priority Support', included: true },
        { name: '15 Automation Workflows', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Custom Integration', included: true },
        { name: 'API Access', included: true }
      ],
      cta: 'Start Free Trial'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      price: {
        monthly: 199,
        annual: 179
      },
      features: [
        { name: 'Unlimited Power Apps', included: true },
        { name: '24/7 Support', included: true },
        { name: 'Unlimited Workflows', included: true },
        { name: 'Custom Analytics', included: true },
        { name: 'Advanced Integration', included: true },
        { name: 'Dedicated Account Manager', included: true }
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className={styles.pricing}>
      <motion.div 
              className={styles.heroSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1>Simple, Transparent Pricing</h1>
              <p>Choose the plan that's right for your business</p>
            </motion.div>
      <div className={styles.container}>
        <ScrollAnimation animation="fadeIn">
          <div className={styles.header}>
            <p></p>
            
            <div className={styles.billingToggle}>
              <span className={billingCycle === 'monthly' ? styles.active : ''}>
                Monthly
              </span>
              <button
                className={styles.toggle}
                onClick={() => setBillingCycle(
                  billingCycle === 'monthly' ? 'annual' : 'monthly'
                )}
              >
                <motion.div
                  className={styles.toggleHandle}
                  animate={{ x: billingCycle === 'monthly' ? 0 : 22 }}
                />
              </button>
              <span className={billingCycle === 'annual' ? styles.active : ''}>
                Annual
                {/* <span className={styles.discount}>Save 20%</span> */}
              </span>
            </div>
          </div>
        </ScrollAnimation>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <ScrollAnimation
              key={plan.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div
                className={`${styles.planCard} ${
                  plan.popular ? styles.popular : ''
                }`}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                animate={{
                  scale: hoveredPlan === plan.id ? 1.03 : 1,
                  boxShadow: hoveredPlan === plan.id 
                    ? '0 20px 40px rgba(0,0,0,0.1)' 
                    : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                {plan.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}

                <div className={styles.planHeader}>
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className={styles.price}>
                    <span className={styles.currency}>$</span>
                    <span className={styles.amount}>
                      {plan.price[billingCycle]}
                    </span>
                    <span className={styles.period}>
                      /{billingCycle === 'monthly' ? 'mo' : 'mo billed annually'}
                    </span>
                  </div>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={!feature.included ? styles.disabled : ''}
                    >
                      <span className={styles.checkmark}>
                        {feature.included ? '✓' : '×'}
                      </span>
                      {feature.name}
                    </motion.li>
                  ))}
                </ul>

                <button className={`${styles.ctaButton} ${
                  plan.popular ? styles.primary : styles.secondary
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation animation="fadeIn" delay={0.3}>
          <div className={styles.guarantee}>
            <div className={styles.guaranteeIcon}>🛡️</div>
            <div className={styles.guaranteeContent}>
              <h4>30-Day Money-Back Guarantee</h4>
              <p>Try any plan risk-free for 30 days. If you're not completely satisfied, we'll refund your payment.</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default PricingSection;