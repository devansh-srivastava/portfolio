/**
 * CaseStudies.jsx - Product Case Studies Section
 * 
 * Displays product case studies demonstrating PM thinking:
 * - Tapsy Mobile App: Full product development experience
 * - Food Delivery Analysis: Retention & gamification solution
 * - Dating App Case Study: UX research & churn reduction
 * 
 * Each case study card shows:
 * - Category and role
 * - Key metrics
 * - Highlights/accomplishments
 * - Key insight/learning
 * 
 * @component
 */

import { motion } from 'framer-motion';
import { 
  Smartphone, 
  UtensilsCrossed, 
  Heart, 
  FolderOpen,
  ArrowUpRight,
  Target,
  Zap,
  TrendingUp,
  Eye
} from 'lucide-react';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
  // Case study data with detailed information
  const caseStudies = [
    {
      id: 1,
      title: "MeriFile",
      category: "WhatsApp-Based AI Agent",
      icon: FolderOpen,
      color: "#E6F4FF",
      accentColor: "#2E86AB",
      description: "An AI file assistant on WhatsApp that stores, tags, transcribes, and retrieves files through natural conversation.",
      role: "Product Manager & Builder",
      metrics: [
        { label: "Entry Point", value: "WhatsApp" },
        { label: "Max File Size", value: "50 MB" },
        { label: "Core Value", value: "Zero-UI Filing" }
      ],
      highlights: [
        "Defined end-to-end PRD with user flows, architecture, and tooling",
        "Prioritized duplicate detection, OCR/transcription, and semantic retrieval",
        "Designed async metadata pipeline to return fast confirmations",
        "Specified voice-note flow with Hindi transcription and translation"
      ],
      insight: "Great products reduce behavior change by fitting into tools users already use daily."
    },
    {
      id: 2,
      title: "Tapsy Mobile App",
      category: "Product",
      icon: Smartphone,
      color: "#E8E5FF",
      accentColor: "#7C6AEF",
      description: "A mobile app built from concept to MVP, focusing on user experience and iterative development.",
      role: "Product Owner & Developer",
      metrics: [
        { label: "MVP Shipped", value: "✓" },
        { label: "Tech Stack", value: "React Native" },
        { label: "Design Tool", value: "Figma" }
      ],
      highlights: [
        "Led product conceptualization and feature definition",
        "Designed user flows and wireframes in Figma",
        "Built and shipped MVP with React Native + Firebase",
        "Iterated based on user feedback"
      ],
      insight: "First-hand experience of the full product lifecycle from idea to launch."
    },
    {
      id: 3,
      title: "Food Delivery App Analysis",
      category: "Case Study",
      icon: UtensilsCrossed,
      color: "#FFE5E5",
      accentColor: "#FF6B9D",
      description: "Deep-dive analysis into user retention challenges with a proposed loyalty-gamification solution.",
      role: "Product Analyst",
      metrics: [
        { label: "Focus Area", value: "Retention" },
        { label: "Solution Type", value: "Gamification" },
        { label: "Business Impact", value: "High" }
      ],
      highlights: [
        "Identified key drop-off points in user journey",
        "Researched competitor loyalty programs",
        "Designed gamification-based loyalty system",
        "Projected retention improvement strategies"
      ],
      insight: "Understanding that features must drive measurable business outcomes."
    },
    {
      id: 4,
      title: "Dating App Case Study",
      category: "Case Study",
      icon: Heart,
      color: "#E5F5F0",
      accentColor: "#4ECDC4",
      description: "Identified user-intent mismatch causing high churn and proposed intent-based onboarding solution.",
      role: "UX Researcher",
      metrics: [
        { label: "Problem", value: "High Churn" },
        { label: "Root Cause", value: "Intent Mismatch" },
        { label: "Solution", value: "Smart Onboarding" }
      ],
      highlights: [
        "Analyzed user behavior patterns and churn data",
        "Discovered mismatch between user intent and app experience",
        "Designed intent-based onboarding flow",
        "Proposed personalization framework to reduce churn"
      ],
      insight: "Solving the right problem matters more than building features."
    }
  ];

  // Staggered container animation for grid cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,  // 200ms between each card
        delayChildren: 0.3,   // Initial delay before first card
      },
    },
  };

  // Card slide-up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="case-studies" className={styles.caseStudies}>
      {/* Section Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.sectionTag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Target size={16} />
          <span>Product Case Studies</span>
        </motion.div>
        
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Thinking Like a PM
        </motion.h2>
        
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Solving product problems with structured thinking, user insight, and execution clarity
        </motion.p>
      </div>

      {/* Case Studies Grid */}
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {caseStudies.map((study) => {
          const Icon = study.icon;
          return (
            <motion.article
              key={study.id}
              className={styles.card}
              style={{ '--card-color': study.color, '--accent': study.accentColor }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} />
                </div>
                <span className={styles.category}>{study.category}</span>
              </div>

              {/* Title & Description */}
              <h3 className={styles.cardTitle}>{study.title}</h3>
              <p className={styles.cardDescription}>{study.description}</p>

              {/* Role Badge */}
              <div className={styles.roleBadge}>
                <Zap size={14} />
                <span>{study.role}</span>
              </div>

              {/* Metrics */}
              <div className={styles.metrics}>
                {study.metrics.map((metric, i) => (
                  <div key={i} className={styles.metric}>
                    <span className={styles.metricLabel}>{metric.label}</span>
                    <span className={styles.metricValue}>{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className={styles.highlights}>
                {study.highlights.map((highlight, i) => (
                  <div key={i} className={styles.highlight}>
                    <ArrowUpRight size={12} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Insight */}
              <div className={styles.insight}>
                <Eye size={16} />
                <p>{study.insight}</p>
              </div>

              {/* Hover Arrow */}
              <motion.div 
                className={styles.cardArrow}
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 5, y: -5 }}
              >
                <ArrowUpRight size={24} />
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        className={styles.bottomCta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.ctaText}>
          Want to see more detailed case studies with full PRDs?
        </p>
        <motion.button 
          className={styles.ctaButton}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Get in Touch</span>
          <TrendingUp size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CaseStudies;
