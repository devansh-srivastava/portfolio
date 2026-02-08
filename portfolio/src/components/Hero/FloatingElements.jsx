/**
 * FloatingElements.jsx - Floating UI Elements
 * 
 * Creates an animated background layer with:
 * - 8 floating skill tags with continuous floating animation
 * - Decorative floating dots with varying sizes and colors
 * 
 * Features:
 * - Continuous floating animations (bobbing + rotation) for each element
 * - Pastel color scheme matching the portfolio theme
 * 
 * @component
 */

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { 
  Figma, 
  FileCode2, 
  Layers, 
  Cpu, 
  Palette, 
  LayoutGrid,
  Braces,
  Bot,
  Target,
  Briefcase
} from 'lucide-react';
import styles from './FloatingElements.module.css';

/**
 * FloatingElement - Individual floating skill tag with continuous animation
 * 
 * @param {Object} props.element - Element configuration (icon, label, color, position, etc.)
 */
const FloatingElement = ({ element }) => {
  const Icon = element.icon;
  const elementRef = useRef(null);
  const hoverX = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const springX = useSpring(hoverX, { stiffness: 260, damping: 16, mass: 0.5 });
  const springY = useSpring(hoverY, { stiffness: 260, damping: 16, mass: 0.5 });

  const handleMouseMove = (event) => {
    const rect = elementRef.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const maxShift = 50;
    const distance = Math.min(Math.hypot(dx, dy), 120) / 120;
    const repelX = (-dx / (Math.hypot(dx, dy) || 1)) * maxShift * distance;
    const repelY = (-dy / (Math.hypot(dx, dy) || 1)) * maxShift * distance;
    hoverX.set(repelX);
    hoverY.set(repelY);
  };

  const handleMouseLeave = () => {
    hoverX.set(0);
    hoverY.set(0);
  };

  return (
    <motion.div
      className={styles.floatingElementWrapper}
      style={{
        ...element.position,
      }}
      // Entry animation with delayed appearance
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -15, 0],           // Vertical bobbing - entire element moves
        rotate: [0, 5, -5, 0],    // Gentle rotation - entire element rotates
      }}
      transition={{
        opacity: { delay: element.delay, duration: 0.5 },
        scale: { delay: element.delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
        y: { delay: element.delay, duration: element.duration, repeat: Infinity, ease: "easeInOut" },
        rotate: { delay: element.delay, duration: element.duration * 1.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <motion.div
        ref={elementRef}
        className={styles.floatingElement}
        style={{
          backgroundColor: element.color,
          x: springX,
          y: springY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Content with icon and label */}
        <div className={styles.innerContent}>
          <Icon size={20} className={styles.icon} />
          <span className={styles.label}>{element.label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * FloatingElements - Container component for all floating skill tags
 * 
 * Renders floating elements with continuous bobbing and rotation animations.
 */
const FloatingElements = () => {
  // Configuration for each floating skill tag
  // Each element has: icon, label, color, position, animation delay, and duration
  const floatingElements = [
    { 
      id: 1, 
      icon: Figma, 
      label: 'Figma', 
      color: '#E8E5FF',
      position: { top: '15%', left: '8%' },
      delay: 0,
      duration: 5
    },
    { 
      id: 2, 
      icon: FileCode2, 
      label: 'React', 
      color: '#FFE5E5',
      position: { top: '25%', right: '12%' },
      delay: 0.5,
      duration: 6
    },
    { 
      id: 3, 
      icon: Layers, 
      label: 'PRD', 
      color: '#FFF9E6',
      position: { top: '60%', left: '5%' },
      delay: 1,
      duration: 4.5
    },
    { 
      id: 4, 
      icon: Cpu, 
      label: 'AI Agents', 
      color: '#E8E5FF',
      position: { top: '62%', right: '14%' },
      delay: 1.5,
      duration: 5.5
    },
    { 
      id: 5, 
      icon: Palette, 
      label: 'UI/UX', 
      color: '#E8E5FF',
      position: { top: '40%', left: '3%' },
      delay: 0.8,
      duration: 6.5
    },
    { 
      id: 6, 
      icon: LayoutGrid, 
      label: 'Wireframes', 
      color: '#FFF9E6',
      position: { top: '45%', right: '5%' },
      delay: 1.2,
      duration: 5
    },
    { 
      id: 7, 
      icon: Braces, 
      label: 'TypeScript', 
      color: '#E5F5F0',
      position: { bottom: '20%', left: '10%' },
      delay: 0.3,
      duration: 5.8
    },
    { 
      id: 8, 
      icon: Bot, 
      label: 'OpenAI', 
      color: '#FFE5E5',
      position: { bottom: '30%', right: '2%' },
      delay: 0.7,
      duration: 4.8
    },
    { 
      id: 9, 
      icon: Target, 
      label: 'Product Thinking', 
      color: '#E8E5FF',
      position: { top: '12%', right: '8%' },
      delay: 0.9,
      duration: 5.2
    },
    { 
      id: 10, 
      icon: Briefcase, 
      label: 'Angular', 
      color: '#E5F5F0',
      position: { top: '30%', left: '12%' },
      delay: 1.1,
      duration: 5.6
    },
  ];

  return (
    <div className={styles.floatingContainer}>
      {floatingElements.map((element) => (
        <FloatingElement 
          key={element.id} 
          element={element} 
        />
      ))}

      {/* Decorative floating dots */}
      {[
        { top: '25%', left: '15%', size: 8, delay: 0.3, duration: 4 },
        { top: '45%', left: '85%', size: 10, delay: 0.8, duration: 3.5 },
        { top: '65%', left: '20%', size: 6, delay: 1.2, duration: 5 },
        { top: '35%', left: '75%', size: 12, delay: 0.5, duration: 4.5 },
        { top: '55%', left: '45%', size: 7, delay: 1, duration: 3.8 },
        { top: '75%', left: '60%', size: 9, delay: 0.7, duration: 4.2 },
      ].map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className={styles.floatingDot}
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: ['#E8E5FF', '#FFE5E5', '#FFF9E6', '#E5F5F0'][i % 4],
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
