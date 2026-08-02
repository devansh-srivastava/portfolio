import styles from './ExactDeckSlide.module.css';

/**
 * Renders a supplied deck image at its natural 16:9 composition.
 * The containing canvas uses `object-fit: contain`, so no part of the
 * original slide is cropped when a parent is wider or taller than 16:9.
 */
function ExactDeckSlide({ slide, priority = false, className = '' }) {
  const frameClassName = [styles.frame, className].filter(Boolean).join(' ');

  return (
    <figure className={frameClassName}>
      <img
        alt={slide.alt}
        className={styles.artwork}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        loading={priority ? 'eager' : 'lazy'}
        src={slide.image}
      />
    </figure>
  );
}

export default ExactDeckSlide;
