/**
 * Experience.jsx - Work Experience Section
 * 
 * Displays work history as expandable timeline cards.
 * Cards are listed vertically in reverse-chronological order and
 * expand on click to reveal key contributions.
 * 
 * Features:
 * - Vertical non-overlapping timeline cards
 * - Click-to-expand interaction per role
 * - Detailed role information with highlights and skills
 * 
 * @component
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowUpRight, Building2, ChevronDown } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  // Keep track of which card is currently expanded.
  // Null means all cards are collapsed.
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCardId((currentId) => (currentId === cardId ? null : cardId));
  };

  // Work experience data
  // Each entry includes role details, highlights, and skills used
  const experiences = [
    {
      id: 1,
      role: "Associate Engineer II",
      company: "Deloitte USI",
      location: "Delhi, India",
      period: "April 2025 - Present",
      color: "#E8E5FF",
      accentColor: "#7C6AEF",
      description: "Frontend development for a multi-state insurance enrollment portal.",
      highlights: [
        "Worked on frontend for an internal insurance enrollment portal across 17 U.S. states",
        "Implemented and maintained state-specific enrollment forms by translating PDF forms into structured, validated UI flows",
        "Contributed to unified search and workflow improvements, simplifying agent navigation across complex enrollment scenarios",
        "Supported platform stability through Angular upgrades, security checks, documentation, and close coordination with QA, backend, and analysts"
      ],
      skills: ["Angular", "TypeScript", "Figma", "JIRA", "Agile"],
      impact: "17 U.S. States Impacted"
    },
    {
      id: 2,
      role: "Associate Software Engineer",
      company: "Carelon Global Solutions",
      location: "Delhi, India",
      period: "Aug 2023 - Mar 2025",
      color: "#E5F5F0",
      accentColor: "#4ECDC4",
      description: "Built core workflow features for an internal insurance enrollment platform.",
      highlights: [
        "Built core workflow features for an internal insurance enrollment platform",
        "Built a Compare Feature for side-by-side enrollment validation, reducing manual review errors for agents",
        "Worked on configurable UI modules and state-specific logic during open enrollment under tight deadlines",
        "Improved code quality and reliability through vulnerability fixes, data sanitization, documentation, and cross-team coordination"
      ],
      skills: ["Angular", "TypeScript", "Jasmine", "Karma", "CSS"],
      impact: "1.5+ Years Healthcare Tech"
    },
    {
      id: 3,
      role: "Full-Stack Developer Intern",
      company: "Little Leap",
      location: "Remote",
      period: "Jul 2021 - Dec 2021",
      color: "#FFE5E5",
      accentColor: "#FF6B9D",
      description: "Contributed to internal tools and CRM platform development.",
      highlights: [
        "Contributed to internal tools and a CRM platform",
        "Identified gaps in existing workflows and proposed feature-level improvements",
        "Built and enhanced features for an internal CRM platform, including certificate generation and Excel-based data upload",
        "Worked end-to-end on features, from idea discussion to implementation, in close collaboration with the team"
      ],
      skills: ["Laravel", "PHP", "MySQL", "AWS", "Bootstrap"],
      impact: "First Tech Role"
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      {/* Section Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.sectionTag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Briefcase size={16} />
          <span>Work Experience</span>
        </motion.div>
        
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Journey So Far
        </motion.h2>
        
        <motion.p
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From building features to understanding users — every role shaped my product thinking
        </motion.p>
      </div>

      {/* Experience timeline cards (latest to oldest) */}
      <div className={styles.cardsContainer}>
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={exp.id} 
            experience={exp} 
            index={index}
            isExpanded={expandedCardId === exp.id}
            onToggle={toggleCard}
          />
        ))}
      </div>
    </section>
  );
};

/**
 * ExperienceCard - Individual experience timeline card.
 * Collapsed state shows key role details and summary line.
 * Expanded state reveals key contributions.
 * 
 * @param {Object} props.experience - Experience data (role, company, highlights, etc.)
 * @param {number} props.index - Card index for timeline numbering
 * @param {boolean} props.isExpanded - Whether card is currently expanded
 * @param {(cardId: number) => void} props.onToggle - Toggle handler
 */
const ExperienceCard = ({ experience, index, isExpanded, onToggle }) => {
  const panelId = `experience-panel-${experience.id}`;
  const buttonId = `experience-toggle-${experience.id}`;

  return (
    <article className={styles.cardWrapper}>
      <div 
        className={styles.card}
        style={{ 
          backgroundColor: experience.color,
          '--accent-color': experience.accentColor
        }}
      >
        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div className={styles.companyInfo}>
            <div className={styles.companyIcon}>
              <Building2 size={24} />
            </div>
            <div>
              <h3 className={styles.role}>{experience.role}</h3>
              <p className={styles.company}>{experience.company}</p>
            </div>
          </div>
          <div className={styles.cardMetaRight}>
            {index === 0 && <span className={styles.latestBadge}>Latest</span>}
            <div className={styles.impactBadge}>
              {experience.impact}
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className={styles.metaItem}>
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Main summary line visible in collapsed state */}
        <p className={styles.description}>{experience.description}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={panelId}
              className={styles.expandContent}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <h4 className={styles.highlightsTitle}>Key Contributions</h4>
              {/* Show top 3 contributions to keep the section concise and scannable */}
              <div className={styles.highlights}>
                <ul className={styles.highlightsList}>
                  {experience.highlights.slice(0, 3).map((highlight, i) => (
                    <motion.li 
                      key={i}
                      className={styles.highlightItem}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <ArrowUpRight size={14} className={styles.highlightIcon} />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className={styles.skillsUsed}>
                {experience.skills.map((skill, i) => (
                  <span key={i} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          id={buttonId}
          type="button"
          className={styles.expandArrowButton}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} key contributions for ${experience.role}`}
          onClick={() => onToggle(experience.id)}
        >
          <ChevronDown size={20} className={isExpanded ? styles.chevronOpen : styles.chevron} />
        </button>
      </div>
    </article>
  );
};

export default Experience;
