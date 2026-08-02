import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ExactDeckSlide from '../components/MeriFileStory/ExactDeckSlide';
import { MeriFileSlideFive, MeriFileSlideSix } from '../components/MeriFileStory/NarrativeSlides';
import { MeriFileSlideTen } from '../components/MeriFileStory/TechnicalSlides';
import { MeriFileSlideThirteen, MeriFileSlideFourteen } from '../components/MeriFileStory/ClosingSlides';
import { meriFileExactSlides } from '../data/meriFileExactSlides';
import styles from './MeriFileStoryPage.module.css';

const meriFileScenes = [
  {
    id: meriFileExactSlides[0].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[0].image,
    props: { slide: meriFileExactSlides[0], priority: true },
  },
  {
    id: meriFileExactSlides[1].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[1].image,
    props: { slide: meriFileExactSlides[1] },
  },
  {
    id: meriFileExactSlides[2].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[2].image,
    props: { slide: meriFileExactSlides[2] },
  },
  {
    id: meriFileExactSlides[3].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[3].image,
    props: { slide: meriFileExactSlides[3] },
  },
  { id: 'missing-document-emergency', Component: MeriFileSlideFive },
  { id: 'what-if', Component: MeriFileSlideSix },
  {
    id: meriFileExactSlides[4].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[4].image,
    props: { slide: meriFileExactSlides[4] },
  },
  {
    id: meriFileExactSlides[5].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[5].image,
    props: { slide: meriFileExactSlides[5] },
  },
  {
    id: meriFileExactSlides[6].id,
    Component: ExactDeckSlide,
    image: meriFileExactSlides[6].image,
    props: { slide: meriFileExactSlides[6] },
  },
  { id: 'hypothesis', Component: MeriFileSlideTen },
  {
    id: 'agent-flow',
    Component: ExactDeckSlide,
    image: `${import.meta.env.BASE_URL}merifile/slide-11.webp`,
    props: {
      priority: true,
      slide: {
        image: `${import.meta.env.BASE_URL}merifile/slide-11.webp`,
        alt: 'MeriFile agent flow diagram from an inbound WhatsApp message through the orchestrator and storage tools to an outbound response.',
      },
    },
  },
  {
    id: 'architecture',
    Component: ExactDeckSlide,
    image: `${import.meta.env.BASE_URL}merifile/slide-12.webp`,
    props: {
      priority: true,
      slide: {
        image: `${import.meta.env.BASE_URL}merifile/slide-12.webp`,
        alt: 'MeriFile system architecture diagram showing WhatsApp, AWS EC2, agents, Firebase Firestore, and Firebase Storage.',
      },
    },
  },
  { id: 'user-insight', Component: MeriFileSlideThirteen },
  { id: 'get-started', Component: MeriFileSlideFourteen },
];

const researchSources = {
  data: {
    label: 'User data',
    sourceUrl: 'https://docs.google.com/spreadsheets/d/141guyK_9kJU5pHdzbMziiF7ZphYkgzb-/edit?gid=229063083#gid=229063083',
    embedUrl: 'https://docs.google.com/spreadsheets/d/141guyK_9kJU5pHdzbMziiF7ZphYkgzb-/preview?gid=229063083',
    title: 'MeriFile user research data',
  },
  interviews: {
    label: 'Interview notes',
    sourceUrl: 'https://drive.google.com/file/d/1wucJDoMim1jMrftkYksViWslx4-CCd75/view?usp=sharing',
    embedUrl: 'https://drive.google.com/file/d/1wucJDoMim1jMrftkYksViWslx4-CCd75/preview',
    title: 'MeriFile user interview notes',
  },
};

function MeriFileStoryPage({ onBackHome }) {
  const shouldReduceMotion = useReducedMotion();
  const pageRef = useRef(null);
  const [activeResearchSource, setActiveResearchSource] = useState(null);

  useEffect(() => {
    if (!activeResearchSource) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveResearchSource(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeResearchSource]);

  const activeSource = activeResearchSource ? researchSources[activeResearchSource] : null;

  return (
    <main className={styles.page} ref={pageRef}>
      <header className={styles.header}>
        <button className={styles.backButton} type="button" onClick={onBackHome}>
          Back to work
        </button>
        <p className={styles.title}>MeriFile</p>
      </header>

      {meriFileScenes.map(({ Component, id, image, props }, index) => (
        <section className={styles.slideSection} id={`merifile-slide-${index + 1}`} key={id}>
          {image ? (
            <div
              aria-hidden="true"
              className={styles.ambient}
              style={{ backgroundImage: `url(${image})` }}
            />
          ) : null}
          <motion.div
            className={styles.sceneStage}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Component {...props} onOpenResearch={setActiveResearchSource} />
          </motion.div>
          <p className={styles.slideCount} aria-label={`Slide ${index + 1} of ${meriFileScenes.length}`}>
            {String(index + 1).padStart(2, '0')} / {String(meriFileScenes.length).padStart(2, '0')}
          </p>
        </section>
      ))}

      {activeSource ? (
        <div className={styles.drawerLayer} data-research-drawer>
          <button
            aria-label="Close research source"
            className={styles.drawerBackdrop}
            onClick={() => setActiveResearchSource(null)}
            type="button"
          />
          <aside aria-label={activeSource.label} className={styles.researchDrawer} data-research-drawer>
            <header className={styles.drawerHeader}>
              <div>
                <p>Research source</p>
                <h2>{activeSource.label}</h2>
              </div>
              <button className={styles.drawerClose} onClick={() => setActiveResearchSource(null)} type="button">
                Close
              </button>
            </header>
            <iframe className={styles.researchEmbed} src={activeSource.embedUrl} title={activeSource.title} />
            <a className={styles.openSource} href={activeSource.sourceUrl} rel="noreferrer" target="_blank">
              Open source in a new tab
            </a>
          </aside>
        </div>
      ) : null}
    </main>
  );
}

export default MeriFileStoryPage;
