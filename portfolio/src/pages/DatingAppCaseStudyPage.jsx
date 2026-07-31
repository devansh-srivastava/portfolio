import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from 'lucide-react';
import CaseStudyShowcase from '../components/CaseStudyShowcase';
import { datingAppCaseStudy as study } from '../data/datingAppCaseStudy';
import styles from './DatingAppCaseStudyPage.module.css';

function Chapter({ label, title, children, className = '' }) {
  return (
    <section className={`${styles.chapter} ${className}`}>
      <div className={styles.chapterInner}>
        <span className={styles.chapterLabel}>{label}</span>
        <h2 className={styles.chapterTitle}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function IntentPhone({ screenId }) {
  const [selectedReason, setSelectedReason] = useState(study.signalReasons[0]);

  return (
    <div className={styles.mobileScreen} data-tone="signal">
      <div className={styles.mobileStatusBar}>
        <span>TrueMatch</span>
        <ShieldCheck size={14} />
      </div>
      <AnimatePresence mode="wait">
        {screenId === 'unmatch-feedback' && (
          <motion.div
            key="unmatch-feedback"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.threadPreview}>
              <span className={styles.phoneEyebrow}>Exit flow</span>
              <h4>Why are you closing this match?</h4>
              <p>One quick reason helps improve future match quality.</p>
            </div>
            <div className={styles.reasonList}>
              {study.signalReasons.map((reason) => (
                <button
                  key={reason}
                  type="button"
                  className={reason === selectedReason ? styles.reasonChipActive : styles.reasonChip}
                  onClick={() => setSelectedReason(reason)}
                >
                  {reason}
                </button>
              ))}
            </div>
            <button type="button" className={styles.primaryAction}>
              Submit feedback
            </button>
          </motion.div>
        )}

        {screenId === 'intent-score' && (
          <motion.div
            key="intent-score"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={`${styles.scoreCard} ${styles.noticeCard}`}>
              <div className={styles.scoreHeader}>
                <span className={styles.phoneEyebrow}>A quick check-in</span>
                <TriangleAlert size={16} />
              </div>
              <h4>Some matches have reported different intentions.</h4>
              <p>Take a moment to check that your profile reflects what you’re looking for right now.</p>
            </div>
            <div className={styles.noticeDetail}>
              <BadgeCheck size={17} />
              <p>This stays private and does not appear on your profile.</p>
            </div>
            <button type="button" className={styles.primaryAction}>
              Update intentions
            </button>
          </motion.div>
        )}

        {screenId === 'visibility-impact' && (
          <motion.div
            key="visibility-impact"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={`${styles.visibilityCard} ${styles.noticeCard}`}>
              <div className={styles.scoreHeader}>
                <span className={styles.phoneEyebrow}>Important message</span>
                <TriangleAlert size={16} />
              </div>
              <h4>Your profile may not match your recent intentions.</h4>
              <p>After two more reports of an intentions mismatch, your visibility will be reduced.</p>
            </div>
            <button type="button" className={styles.secondaryAction}>Review my profile</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InboxPhone({ screenId }) {
  return (
    <div className={styles.mobileScreen} data-tone="inbox">
      <div className={styles.mobileStatusBar}>
        <span>Inbox</span>
        <Sparkles size={14} />
      </div>
      <AnimatePresence mode="wait">
        {screenId === 'effort-ranked-inbox' && (
          <motion.div
            key="effort-ranked-inbox"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.rankedIntro}>
              <span className={styles.phoneEyebrow}>Priority chats</span>
              <h4>Better conversations rise first</h4>
            </div>
            <div className={styles.threadList}>
              {study.priorityThreads.map((thread) => (
                <div key={thread.name} className={styles.threadCard}>
                  <div className={styles.threadTop}>
                    <strong>{thread.name}</strong>
                    <span>{thread.badge}</span>
                  </div>
                  <p>{thread.preview}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {screenId === 'reply-reminder' && (
          <motion.div
            key="reply-reminder"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.reminderBanner}>
              <Clock3 size={16} />
              <span>Reply within 24 hours or close the chat.</span>
            </div>
            <div className={styles.chatCard}>
              <div className={styles.chatBubbleInbound}>
                You mentioned long walks and bookstores. Which city does that best?
              </div>
              <div className={styles.chatBubbleGhost}>Draft a quick reply…</div>
            </div>
            <div className={styles.quickActions}>
              <button type="button" className={styles.secondaryAction}>
                Reply now
              </button>
              <button type="button" className={styles.ghostAction}>
                Close chat
              </button>
            </div>
          </motion.div>
        )}

        {screenId === 'idle-thread-control' && (
          <motion.div
            key="idle-thread-control"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={`${styles.systemPanel} ${styles.noticeCard}`}>
              <div className={styles.scoreHeader}>
                <span className={styles.phoneEyebrow}>Important message</span>
                <TriangleAlert size={16} />
              </div>
              <h4>Your matches are waiting for a reply.</h4>
              <p>You don’t seem active on Hinge, and several matches have been left unanswered. This can reduce your visibility.</p>
            </div>
            <button type="button" className={styles.secondaryAction}>View my matches</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DatingAppCaseStudyPage({ onBackHome }) {
  return (
    <main className={styles.page}>
      <section className={`${styles.chapter} ${styles.heroChapter}`}>
        <div className={styles.chapterInner}>
          <button type="button" className={styles.backButton} onClick={onBackHome}>
            <ArrowLeft size={16} />
            <span>Back to portfolio</span>
          </button>
          <span className={styles.chapterLabel}>{study.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{study.hero.title}</h1>
          <p className={styles.heroSummary}>{study.hero.summary}</p>
          <p className={styles.heroHook}>{study.hook}</p>
          <div className={styles.heroMeta}>
            {study.hero.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <Chapter label="Problem" title="Two product failures compound each other">
        <div className={styles.problemGrid}>
          {study.problems.map((problem) => (
            <article key={problem.title} className={styles.problemCard} data-tone={problem.accent}>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter label="Personas" title="Who feels the pain most clearly">
        <div className={styles.personaGrid}>
          {study.personas.map((persona) => (
            <article key={persona.name} className={styles.personaCard} data-tone={persona.accent}>
              <h3>{persona.name}</h3>
              <span>{persona.role}</span>
              <p>{persona.summary}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <CaseStudyShowcase
        label="Solution 1"
        title="Intent Signal"
        intro={study.intentOverview}
        steps={study.intentSteps}
        tone="signal"
        compactPhone
        renderPhone={(screenId) => <IntentPhone screenId={screenId} />}
      />

      <CaseStudyShowcase
        label="Solution 2"
        title="Smart Inbox"
        intro={study.inboxOverview}
        steps={study.inboxSteps}
        tone="inbox"
        compactPhone
        renderPhone={(screenId) => <InboxPhone screenId={screenId} />}
      />

      <Chapter label="Impact" title="What should improve if the system works">
        <div className={styles.metricsGrid}>
          {study.metrics.map((metric, index) => (
            <article key={metric.label} className={styles.metricCard} data-tone={index % 2 === 0 ? 'signal' : 'inbox'}>
              <strong>{metric.target}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter label="Rollout" title="How I would ship it safely">
        <div className={styles.rolloutList}>
          {study.rollout.map((item, index) => (
            <article key={item} className={styles.rolloutCard} data-tone={index % 2 === 0 ? 'signal' : 'inbox'}>
              <span>{`0${index + 1}`}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Chapter>
    </main>
  );
}

export default DatingAppCaseStudyPage;
