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
      description: "WhatsApp-based file assistant that lets people store files, ask questions about them, and retrieve documents from anywhere.",
      role: "Product Manager & Builder",
      url: "https://devansh-srivastava.github.io/Merifile-Website/",
      metrics: [
        { label: "Entry Point", value: "WhatsApp" },
        { label: "Core Value", value: "Zero-UI Filing" },
        { label: "Agent Stack", value: "OpenAI Agents" }
      ],
      highlights: [
        "Designed an easy, conversational flow for saving and retrieving files",
        "Enabled question-answering on stored documents for quick answers",
        "Added voice transcription and automatic summaries for fast capture",
        "Built on OpenAI agents to keep the experience simple and reliable"
      ],
      insight: "Frictionless capture and retrieval drives repeat usage."
    },
    {
      id: 2,
      title: "Tapsy",
      category: "Mobile App",
      icon: Smartphone,
      color: "#E8E5FF",
      accentColor: "#7C6AEF",
      description: "Social drinking game app syncing with show audio. Full product ownership from ideation to MVP launch.",
      role: "Product Owner & Developer",
      url: "https://www.notion.so/Case-Study-Tapsy-Social-Drinking-Game-2bd61277ccc880348b83fee17fd6f8d3?source=copy_link",
      metrics: [
        { label: "Platform", value: "Mobile" },
        { label: "Tech Stack", value: "React Native + Firebase" },
        { label: "Stage", value: "MVP Shipped" }
      ],
      highlights: [
        "Owned product from ideation to MVP release",
        "Designed the core game loop and in-app experience",
        "Built the app with React Native and Firebase",
        "Validated the concept through early user feedback"
      ],
      insight: "Shipping a focused MVP beats overbuilding in early-stage products."
    },
    {
      id: 3,
      title: "Food Delivery Analysis",
      category: "Product Teardown",
      icon: UtensilsCrossed,
      color: "#FFE5E5",
      accentColor: "#FF6B9D",
      description: "Retention strategy analysis proposing a loyalty-gamification system to increase repeat orders.",
      role: "Product Analyst",
      url: "https://www.notion.so/Case-Study-Yearly-Wraps-and-Dietary-Filters-in-Food-Delivery-Apps-2a561277ccc880c99aaad3d66a4a8e57?source=copy_link",
      metrics: [
        { label: "Focus Area", value: "Retention" },
        { label: "Mechanic", value: "Streaks + Achievements" },
        { label: "Goal", value: "Repeat Orders" }
      ],
      highlights: [
        "Mapped drop-offs across key ordering moments",
        "Benchmarked loyalty tactics and market patterns",
        "Designed streak-based rewards and tiered perks",
        "Outlined an experimentation plan for uplift validation"
      ],
      insight: "Retention improves when progress feels visible and rewarding."
    },
    {
      id: 4,
      title: "Dating App Concept",
      category: "Product Teardown",
      icon: Heart,
      color: "#E5F5F0",
      accentColor: "#4ECDC4",
      description: "Designed intent-based onboarding to reduce user-intent mismatch and improve match quality.",
      role: "UX Researcher",
      url: "https://www.notion.so/Case-Study-Aligning-Intentions-Accelerating-Replies-in-Dating-Apps-22161277ccc88091a9d2da01efe5390c?source=copy_link",
      metrics: [
        { label: "Problem", value: "Intent Mismatch" },
        { label: "Fix", value: "Goal Segmentation" },
        { label: "Outcome", value: "Higher Match Quality" }
      ],
      highlights: [
        "Diagnosed intent mismatch across onboarding and discovery",
        "Proposed upfront relationship-goal selection",
        "Designed intent-aware matching and filters",
        "Defined success metrics for post-onboarding quality"
      ],
      insight: "Clear intent alignment reduces churn more than surface-level tweaks."
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
          const CardComponent = study.url ? motion.a : motion.article;
          return (
            <CardComponent
              key={study.id}
              className={styles.card}
              style={{ '--card-color': study.color, '--accent': study.accentColor }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              {...(study.url
                ? {
                    href: study.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
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
            </CardComponent>
          );
        })}
      </motion.div>

    </section>
  );
};

export default CaseStudies;

