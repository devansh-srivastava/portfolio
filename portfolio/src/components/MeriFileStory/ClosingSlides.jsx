import { ArrowUpRight } from 'lucide-react';
import styles from './ClosingSlides.module.css';

const researchSignals = [
  {
    value: '8/12',
    label: 'use WhatsApp for document storage',
  },
  {
    value: '6/12',
    label: 'stopped using DigiLocker',
  },
  {
    value: '2/12',
    label: 'parents are self-sufficient',
  },
];

const frictionPoints = [
  {
    title: 'Files are scattered',
    detail: 'Most users have trouble remembering which file is where.',
  },
  {
    title: 'AI trust gap',
    detail: 'Users hesitate to reply or rely on AI for sensitive documents.',
  },
  {
    title: 'Ownership confusion',
    detail: 'No clear person is responsible for managing family documents.',
  },
  {
    title: 'No quick access',
    detail: 'Documents are not quickly accessible when needed most.',
  },
];

export function MeriFileSlideThirteen({ onOpenResearch }) {
  return (
    <div className={`${styles.canvas} ${styles.researchCanvas}`}>
      <div className={styles.researchIntro}>
        <p className={styles.kicker}>What we learned</p>
        <h2>People do not have a document problem. They have an access problem.</h2>
        <p className={styles.introCopy}>
          The research exposed a familiar pattern: documents exist, but rarely where people need them.
        </p>
      </div>

      <div className={styles.researchBody}>
        <section className={styles.evidencePanel} aria-label="Research evidence">
          <p className={styles.panelLabel}>Research evidence</p>
          <div className={styles.signalList}>
            {researchSignals.map((signal) => (
              <article className={styles.signal} key={signal.value}>
                <strong>{signal.value}</strong>
                <p>{signal.label}</p>
              </article>
            ))}
          </div>
          <p className={styles.digiLockerNote}>
            The other half use DigiLocker only a couple times yearly.
          </p>
        </section>

        <section className={styles.frictionPanel} aria-label="Document management friction points">
          <p className={styles.panelLabel}>The friction underneath</p>
          <ul>
            {frictionPoints.map((point, index) => (
              <li key={point.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <div>
                  <p className={styles.frictionPointTitle}>{point.title}</p>
                  <p className={styles.frictionPointDetail}>{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className={styles.researchSources} aria-label="Research sources">
        <button type="button" onClick={() => onOpenResearch('data')}>
          User data
        </button>
        <button type="button" onClick={() => onOpenResearch('interviews')}>
          Interview notes
        </button>
      </div>
    </div>
  );
}

export function MeriFileSlideFourteen() {
  return (
    <div className={`${styles.canvas} ${styles.closingCanvas}`}>
      <div className={styles.closingOrbit} aria-hidden="true" />
      <div className={styles.closingContent}>
        <p className={styles.kicker}>MeriFile</p>
        <h2>Your documents. Ready when life asks for them.</h2>
        <p>
          Get started on MeriFile for free.
        </p>
        <a
          className={styles.cta}
          href="https://wa.me/919217796365?text=Hi"
          rel="noreferrer"
          target="_blank"
        >
          Try MeriFile for free
          <ArrowUpRight aria-hidden="true" size={24} strokeWidth={1.8} />
        </a>
      </div>
      <p className={styles.closingMark} aria-hidden="true">MF</p>
    </div>
  );
}
