/**
 * Skills.jsx - Skills & Superpowers Section
 * 
 * Showcases both product management and technical skills:
 * - Product Skills: Grid of skill cards with icons
 * - Technical Skills: Progress bars showing proficiency levels
 * - AI Focus: Highlight section for current learning focus
 * 
 * Uses staggered animations for visual interest.
 * 
 * @component
 */

import { motion } from 'framer-motion';
import { 
  Brain, 
  Lightbulb, 
  Users, 
  BarChart3, 
  FileText, 
  Compass,
  Sparkles,
  Code2
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  // Product Management skills with icons and colors
  const pmSkills = [
    { icon: Brain, label: 'Product Thinking', color: '#E8E5FF' },
    { icon: Lightbulb, label: 'Feature Prioritization', color: '#FFF9E6' },
    { icon: Users, label: 'User Research', color: '#FFE5E5' },
    { icon: FileText, label: 'PRD Writing', color: '#E5F5F0' },
    { icon: BarChart3, label: 'Product Teardowns', color: '#E8E5FF' },
    { icon: Compass, label: 'Wireframing', color: '#FFF9E6' },
  ];

  // Technical skills with proficiency levels (0-100)
  const techSkills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React Native', level: 75 },
    { name: 'Figma', level: 80 },
    { name: 'OpenAI API', level: 70 },
    { name: 'CSS/Sass', level: 90 },
  ];

  // Container animation - staggers children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,  // 100ms delay between each child
        delayChildren: 0.2,   // 200ms initial delay
      },
    },
  };

  // Individual item slide-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className={styles.skills}>
      {/* Background Decoration */}
      <div className={styles.bgDecoration}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      {/* Section Header */}
      <div className={styles.header}>
        <motion.div
          className={styles.sectionTag}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles size={16} />
          <span>Skills & Superpowers</span>
        </motion.div>
        
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I Bring to the Table
        </motion.h2>
      </div>

      <div className={styles.content}>
        {/* Left: Product Skills */}
        <motion.div 
          className={styles.pmSkillsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className={styles.skillsSectionHeader}>
            <div className={styles.skillsIcon}>
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className={styles.skillsTitle}>Product Skills</h3>
              <p className={styles.skillsSubtitle}>Building product intuition</p>
            </div>
          </motion.div>

          <div className={styles.pmSkillsGrid}>
            {pmSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.label}
                  className={styles.pmSkillCard}
                  style={{ backgroundColor: skill.color }}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 2 : -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon size={24} className={styles.pmSkillIcon} />
                  <span className={styles.pmSkillLabel}>{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Technical Skills */}
        <motion.div 
          className={styles.techSkillsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className={styles.skillsSectionHeader}>
            <div className={styles.skillsIcon} style={{ background: '#E5F5F0' }}>
              <Code2 size={24} />
            </div>
            <div>
              <h3 className={styles.skillsTitle}>Technical Foundation</h3>
              <p className={styles.skillsSubtitle}>My developer roots</p>
            </div>
          </motion.div>

          <div className={styles.techSkillsList}>
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={styles.techSkillItem}
                variants={itemVariants}
              >
                <div className={styles.techSkillHeader}>
                  <span className={styles.techSkillName}>{skill.name}</span>
                  <span className={styles.techSkillLevel}>{skill.level}%</span>
                </div>
                <div className={styles.techSkillBar}>
                  <motion.div 
                    className={styles.techSkillProgress}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;
