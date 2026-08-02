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
import { routes } from '../../lib/routes';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
  // Case study data with detailed information
  const caseStudies = [
    {
      id: 1,
      title: "MeriFile",
      category: "WhatsApp AI Document Assistant",
      icon: FolderOpen,
      color: "#E6F4FF",
      accentColor: "#2E86AB",
      description: "A WhatsApp AI bot for saving, organizing, querying, and retrieving personal documents - built end to end and later pivoted toward group use.",
      role: "Product Manager & Builder",
      url: routes.meriFileStory,
      isInternal: true,
      metrics: [
        { label: "Discovery", value: "12+ Interviews" },
        { label: "Stack", value: "OpenAI Responses API" },
        { label: "Infrastructure", value: "AWS + Firebase" }
      ],
      highlights: [
        "Scoped the MVP and independently built and launched the bot with OpenAI's Responses API, multi-agent orchestration, AWS, and Firebase",
        "Ran structured post-launch interviews with 12+ users to uncover document-management behaviours, pain points, and unmet needs",
        "Used qualitative findings to identify stronger value in group contexts and pivoted from a personal bot to a group-based model",
        "Designed a conversational experience for storing, asking questions about, and retrieving documents"
      ],
      insight: "Discovery isn't finished at launch - qualitative evidence can reveal the product's higher-retention use case."
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
      description: "Interactive concept exploring yearly wraps and dietary filters to improve retention, trust, and ordering confidence.",
      role: "Product Analyst",
      url: routes.foodDeliveryCaseStudy,
      isInternal: true,
      metrics: [
        { label: "Focus Area", value: "Retention + Trust" },
        { label: "Concept", value: "Wrap + Filters" },
        { label: "Goal", value: "More Repeat Orders" }
      ],
      highlights: [
        "Mapped two user tensions: low emotional stickiness and slow dietary discovery",
        "Designed a yearly wrap that turns order history into a memorable story",
        "Added dietary filters to reduce search friction and build meal confidence",
        "Framed KPI and rollout logic to validate behavior change after launch"
      ],
      insight: "Retention grows faster when delight and trust improve together."
    },
    {
      id: 4,
      title: "Dating App Concept",
      category: "Product Teardown",
      icon: Heart,
      color: "#E5F5F0",
      accentColor: "#4ECDC4",
      description: "Designed an intent signal system and smart inbox to reduce mismatch, improve reply quality, and make dating apps feel more trustworthy.",
      role: "UX Researcher",
      url: routes.datingAppCaseStudy,
      isInternal: true,
      metrics: [
        { label: "Problem", value: "Intent Mismatch" },
        { label: "Fix", value: "Intent Signal + Smart Inbox" },
        { label: "Outcome", value: "Higher Match Quality" }
      ],
      highlights: [
        "Mapped the two main failure modes: intent mismatch and reply latency",
        "Designed post-match feedback that turns frustration into a useful signal",
        "Prioritized conversations by effort instead of raw volume",
        "Defined success metrics for trust, responsiveness, and retention"
      ],
      insight: "Clear intent alignment and faster replies reduce churn more than surface-level matching tweaks."
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
                    ...(study.isInternal
                      ? {}
                      : {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }),
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

