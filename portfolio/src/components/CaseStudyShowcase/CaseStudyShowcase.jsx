import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './CaseStudyShowcase.module.css';

function StoryFrame({ step, index, title, body }) {
  return (
    <motion.article
      key={step.id}
      className={styles.storyFrame}
      initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
      transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
      aria-live="polite"
    >
      <p className={styles.storyMeta}>{`${String(index + 1).padStart(2, '0')} · ${step.label}`}</p>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}

function PhoneShell({ children, progress, tone, compactPhone = false }) {
  const reducedMotion = useReducedMotion();
  const driftY = useTransform(progress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);
  const glowScale = useSpring(useTransform(progress, [0, 1], [0.94, 1.04]), {
    stiffness: 120,
    damping: 24,
  });

  return (
    <div className={styles.phoneStage} data-tone={tone} data-size={compactPhone ? 'compact' : undefined}>
      <motion.div className={styles.phoneGlow} style={{ y: driftY, scale: glowScale }} />
      <motion.div className={styles.phoneShell} style={{ y: driftY }}>
        <div className={styles.phoneNotch} />
        <div className={styles.phoneScreen}>{children}</div>
      </motion.div>
    </div>
  );
}

function StoryNavigator({ activeIndex, steps, goToStep }) {
  const previousIndex = activeIndex === 0 ? steps.length - 1 : activeIndex - 1;
  const nextIndex = activeIndex === steps.length - 1 ? 0 : activeIndex + 1;

  return (
    <nav className={styles.storyNavigator} aria-label="Solution stages">
      <button
        type="button"
        className={styles.storyNavButton}
        aria-label={`Show ${steps[previousIndex].label}`}
        onClick={() => goToStep(previousIndex)}
      >
        <ChevronLeft size={17} />
      </button>
      <div className={styles.storyDots}>
        {steps.map((step, index) => (
          <button
            key={step.id}
            type="button"
            className={index === activeIndex ? styles.storyDotActive : styles.storyDot}
            aria-label={`Show ${step.label}`}
            aria-current={index === activeIndex ? 'step' : undefined}
            onClick={() => goToStep(index)}
          />
        ))}
      </div>
      <button
        type="button"
        className={styles.storyNavButton}
        aria-label={`Show ${steps[nextIndex].label}`}
        onClick={() => goToStep(nextIndex)}
      >
        <ChevronRight size={17} />
      </button>
    </nav>
  );
}

function CaseStudyShowcase({ label, title, intro, steps, renderPhone, tone = 'personal', compactPhone = false }) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepRequest, setStepRequest] = useState(null);

  const goToStep = useCallback((target) => {
    const nextIndex = typeof target === 'number' ? target : steps.findIndex((step) => step.id === target);

    if (nextIndex >= 0 && nextIndex < steps.length) {
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
      setStepRequest({ index: nextIndex });
    }
  }, [steps]);

  useEffect(() => {
    if (!stepRequest || !window.matchMedia('(min-width: 1181px)').matches || !sectionRef.current) {
      return;
    }

    const sectionTop = window.scrollY + sectionRef.current.getBoundingClientRect().top;
    const scrollRange = Math.max(0, sectionRef.current.offsetHeight - window.innerHeight);
    const targetProgress = (stepRequest.index + 0.5) / steps.length;

    window.scrollTo({
      top: sectionTop + scrollRange * targetProgress,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }, [reducedMotion, stepRequest, steps.length]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(steps.length - 1, Math.floor(latest * steps.length));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeStep = steps[activeIndex];
  const stageY = useSpring(useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [18, -18]), {
    stiffness: 120,
    damping: 30,
  });

  return (
    <section ref={sectionRef} className={styles.showcase} data-tone={tone}>
      <div className={styles.stickyArea}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.label}>{label}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.intro}>{intro}</p>
            <div className={styles.storyRail}>
              <AnimatePresence mode="wait">
                <StoryFrame
                  step={activeStep}
                  index={activeIndex}
                  title={activeStep.title}
                  body={activeStep.body}
                />
              </AnimatePresence>
              <StoryNavigator activeIndex={activeIndex} steps={steps} goToStep={goToStep} />
            </div>
          </div>
          <motion.div className={styles.visual} style={{ y: stageY }}>
            <PhoneShell progress={scrollYProgress} tone={tone} compactPhone={compactPhone}>
              {renderPhone(activeStep.id, scrollYProgress, goToStep)}
            </PhoneShell>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyShowcase;
