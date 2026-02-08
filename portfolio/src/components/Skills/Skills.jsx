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
  Sparkles
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillColumns = [
    {
      title: 'Product',
      skills: [
        'Product Thinking',
        'Feature Prioritization',
        'User Research',
        'PRD Writing',
        'Product Teardowns',
        'Roadmapping',
        'Wireframing',
      ],
    },
    {
      title: 'Technical',
      skills: [
        'Angular',
        'React Native',
        'REST APIs',
        'OpenAI API',
        'Figma',
      ],
    },
    {
      title: 'Collaboration',
      skills: [
        'Requirements Analysis',
        'Stakeholder Alignment',
        'Cross-functional Sync',
        'Agile / Scrum',
        'QA Collaboration',
        'Documentation',
        'User Feedback Loops',
      ],
    },
  ];

  const rowCount = Math.max(...skillColumns.map((col) => col.skills.length));
  const totalRows = rowCount + 2;
  const accentColors = ['#A569BD', '#EC7063', '#58D68D', '#F7DC6F', '#85C1E9', '#F8C471'];
  const headerCells = ['Skills', ...skillColumns.map((column) => column.title)];

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

  const renderRow = (cells, rowIndex, isHeader = false) => (
    <div
      key={isHeader ? 'header-row' : `row-${rowIndex}`}
      className={styles.sheetRow}
    >
      <div
        className={`${styles.sheetCell} ${styles.sheetCellEmpty} ${styles.sheetCellEdge}`}
        aria-hidden="true"
      />
      {cells.map((cell, cellIndex) => (
        <motion.div
          key={`${cell.label || cell.value || 'cell'}-${cellIndex}`}
          className={`${styles.sheetCell} ${isHeader ? styles.sheetCellHeader : ''} ${isHeader && cellIndex === 0 ? styles.sheetCellSkills : ''} ${cell.isEmpty ? styles.sheetCellEmpty : ''}`}
          style={{ '--cell-accent': cell.accent }}
          variants={itemVariants}
        >
          {cell.value}
        </motion.div>
      ))}
      <div
        className={`${styles.sheetCell} ${styles.sheetCellEmpty} ${styles.sheetCellEdge}`}
        aria-hidden="true"
      />
    </div>
  );

  return (
    <section className={styles.skills}>
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

      <motion.div
        className={styles.sheetGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {renderRow(
          headerCells.map((label, colIndex) => ({
            value: label,
            accent: accentColors[colIndex % accentColors.length],
          })),
          0,
          true
        )}

        {Array.from({ length: totalRows }).map((_, rowIndex) =>
          renderRow(
            [
              { value: '', isEmpty: true, accent: accentColors[0] },
              ...skillColumns.map((column, colIndex) => {
                const skill = column.skills[rowIndex];
                return {
                  value: skill || '',
                  isEmpty: !skill,
                  accent: accentColors[(colIndex + rowIndex) % accentColors.length],
                };
              }),
            ],
            rowIndex,
            false
          )
        )}
      </motion.div>

    </section>
  );
};

export default Skills;
