import { motion, useReducedMotion } from 'framer-motion';
import styles from './NarrativeSlides.module.css';

const messageCards = [
  { label: 'Document needed', position: 'one' },
  { label: 'Aadhaar copy', position: 'two' },
  { label: 'Send it please', position: 'three' },
  { label: 'Where is the bill?', position: 'four' },
  { label: 'Need this today', position: 'five' },
  { label: 'Find the file', position: 'six' },
  { label: 'Can you forward it?', position: 'seven' },
  { label: 'Urgent document', position: 'eight' },
];

function DocumentAtmosphere() {
  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <div className={styles.atmosphereGlow} />
      <div className={styles.messageField}>
        {messageCards.map(({ label, position }) => (
          <div className={`${styles.messageCard} ${styles[position]}`} key={position}>
            <span className={styles.documentMark} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NarrativeCanvas({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.canvas} ${className}`.trim()}
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.992 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
    >
      <DocumentAtmosphere />
      <motion.div
        className={styles.panel}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function MeriFileSlideFive() {
  return (
    <NarrativeCanvas className={styles.slideFive}>
      <h2 className={styles.heading}>
        <span>For parents, every missing document is</span>
        <span>an emergency.</span>
      </h2>
      <p className={styles.supportingLine}>It always ends the same way.</p>
      <p className={styles.limeLine}>Call Rohit!</p>
    </NarrativeCanvas>
  );
}

export function MeriFileSlideSix() {
  return (
    <NarrativeCanvas className={`${styles.slideSix} ${styles.questionPanel}`}>
      <h2 className={styles.question}>
        <span>What if parents never have to</span>
        <span>
          <strong>call Rohit</strong> again?
        </span>
      </h2>
    </NarrativeCanvas>
  );
}
