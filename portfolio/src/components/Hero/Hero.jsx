/**
 * Hero.jsx - Hero Section Component
 * 
 * The main landing section of the portfolio featuring:
 * - Animated status badge showing availability
 * - Main heading with "From Code to Products" tagline
 * - Journey visualization (Frontend Dev → Product Thinker → PM)
 * - CTA buttons linking to Experience and Case Studies sections
 * - Quick stats showcasing key achievements
 * - Scroll indicator for navigation hint
 * 
 * Uses Framer Motion for staggered animations and hover effects.
 * 
 * @component
 */

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Lightbulb, Rocket } from 'lucide-react';
import FloatingElements from './FloatingElements';
import styles from './Hero.module.css';

const Hero = () => {
  // Animation variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
        delayChildren: 0.3,   // Initial delay before children start
      },
    },
  };

  // Slide-up fade animation for main content items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth feel
      },
    },
  };

  // Pop-in animation for tags with scale effect
  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // Overshoot easing for playful bounce
      },
    },
  };

  // Continuous floating animation for background shapes
  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundShapes}>
        <motion.div 
          className={`${styles.bgShape} ${styles.shape1}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={`${styles.bgShape} ${styles.shape2}`}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className={`${styles.bgShape} ${styles.shape3}`}
          animate={floatAnimation}
        />
      </div>

      {/* Floating UI Elements */}
      <FloatingElements />

      {/* Main Content */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Tag */}
        <motion.div variants={tagVariants} className={styles.statusWrapper}>
          <div className={styles.statusTag}>
            <span className={styles.statusDot} />
            <span>Open to PM Opportunities</span>
            <Sparkles size={14} />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className={styles.headingWrapper}>
          <h1 className={styles.heading}>
            <span className={styles.headingLine}>
              From <span className={styles.highlight}>Code</span>
            </span>
            <span className={styles.headingLine}>
              to <span className={styles.highlightAlt}>Products</span>
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p variants={itemVariants} className={styles.subheading}>
          Hey, I'm <span className={styles.name}>Devansh Srivastava</span> — a Frontend Developer 
          with 2+ years of experience, now on a mission to build products that 
          people actually love. Currently exploring AI agents and product thinking.
        </motion.p>

        {/* Journey Tags */}
        <motion.div variants={itemVariants} className={styles.journeyTags}>
          <motion.div 
            className={`${styles.journeyTag} ${styles.tagCode}`}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Code2 size={18} />
            <span>Frontend Dev</span>
          </motion.div>
          <motion.div 
            className={styles.journeyArrow}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={20} />
          </motion.div>
          <motion.div 
            className={`${styles.journeyTag} ${styles.tagProduct}`}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Lightbulb size={18} />
            <span>Product Thinker</span>
          </motion.div>
          <motion.div 
            className={styles.journeyArrow}
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <ArrowRight size={20} />
          </motion.div>
          <motion.div 
            className={`${styles.journeyTag} ${styles.tagPM}`}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket size={18} />
            <span>Product Manager</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className={styles.ctaWrapper}>
          <motion.a
            href="#experience"
            className={styles.ctaPrimary}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View My Journey</span>
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            href="#case-studies"
            className={styles.ctaSecondary}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Product Case Studies</span>
          </motion.a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={itemVariants} className={styles.quickStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>17</span>
            <span className={styles.statLabel}>U.S. States Served</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Product Case Studies</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className={styles.scrollMouse}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className={styles.scrollWheel} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
