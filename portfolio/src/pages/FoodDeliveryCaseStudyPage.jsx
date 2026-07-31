import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  MapPin,
  Share2,
  Sparkles,
  Star,
} from 'lucide-react';
import CaseStudyShowcase from '../components/CaseStudyShowcase';
import { foodDeliveryCaseStudy as study } from '../data/foodDeliveryCaseStudy';
import styles from './FoodDeliveryCaseStudyPage.module.css';

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

function WrapPhone({ screenId, goToStep }) {
  const [activeWrapCard, setActiveWrapCard] = useState(0);
  const activeCard = study.wrapCards[activeWrapCard];
  const wrapProfile = study.wrapProfile;

  return (
    <div className={styles.mobileScreen}>
      <div className={styles.mobileStatusBar}>
        <span>FoodNow</span>
        <Sparkles size={14} />
      </div>
      <AnimatePresence mode="wait">
        {screenId === 'wrap-entry' && (
          <motion.div
            key="wrap-entry"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.wrapEntryCard}>
              <span className={styles.phoneEyebrow}>Yearly wrap</span>
              <h4>Your {wrapProfile.year} Wrap is ready</h4>
              <p>Your favourite orders and weekly rituals, collected in one story.</p>
            </div>
            <button type="button" className={styles.primaryAction} onClick={() => goToStep('wrap-story')}>
              Open wrap
            </button>
            <div className={styles.homeSectionHeader}>
              <strong>Popular near you</strong>
              <span>See all</span>
            </div>
            <div className={styles.restaurantList}>
              {study.wrapHomeRestaurants.map((restaurant, index) => (
                <article key={restaurant.name} className={styles.restaurantCard}>
                  <div className={styles.restaurantThumb} data-variant={index} aria-hidden="true" />
                  <div className={styles.restaurantContent}>
                    <strong>{restaurant.name}</strong>
                    <span>{restaurant.cuisine}</span>
                    <div className={styles.restaurantMeta}>
                      <span>
                        <Star size={12} fill="currentColor" />
                        {restaurant.rating}
                      </span>
                      <span>{restaurant.deliveryTime}</span>
                      <span>{restaurant.deliveryFee}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        )}

        {screenId === 'wrap-story' && (
          <motion.div
            key="wrap-story"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <motion.button
              type="button"
              className={styles.wrapStoryCard}
              whileHover={{ y: -4, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.phoneEyebrow}>Card {activeWrapCard + 1}</span>
              <h4>{activeCard.title}</h4>
              <strong>{activeCard.value}</strong>
              <p>{activeCard.description}</p>
              <div className={styles.phoneMediaCard}>
                <span>Repeat pattern</span>
                <div className={styles.mediaBars}>
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </motion.button>

            <div className={styles.phoneDots}>
              {study.wrapCards.map((card, index) => (
                <button
                  key={card.title}
                  type="button"
                  aria-label={`Show ${card.title}`}
                  className={index === activeWrapCard ? styles.phoneDotActive : styles.phoneDot}
                  onClick={() => setActiveWrapCard(index)}
                />
              ))}
            </div>

            <div className={styles.phoneControls}>
              <button
                type="button"
                aria-label="Previous wrap card"
                onClick={() =>
                  setActiveWrapCard((current) =>
                    current === 0 ? study.wrapCards.length - 1 : current - 1
                  )
                }
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next wrap card"
                onClick={() =>
                  setActiveWrapCard((current) =>
                    current === study.wrapCards.length - 1 ? 0 : current + 1
                  )
                }
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {screenId === 'wrap-share' && (
          <motion.div
            key="wrap-share"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.shareCard}>
              <div className={styles.shareHeader}>
                <span className={styles.phoneEyebrow}>Share card</span>
                <Share2 size={16} />
              </div>
              <h4>{wrapProfile.personality}</h4>
              <p>
                {wrapProfile.orders} orders. {wrapProfile.topCuisine} on top. {wrapProfile.favouriteRestaurant} again.
              </p>
              <div className={styles.sharePills}>
                <span>Top cuisine: {wrapProfile.topCuisine}</span>
                <span>Favourite: {wrapProfile.favouriteRestaurant}</span>
              </div>
              <div className={styles.sharePreview}>
                <span>Story preview</span>
                <strong>{wrapProfile.pattern}</strong>
              </div>
            </div>
            <button type="button" className={styles.primaryAction}>
              Share story
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterPhone({ screenId, goToStep }) {
  const [selectedFilter, setSelectedFilter] = useState('Lactose-free');
  const filteredDishes = useMemo(
    () => study.dishes.filter((dish) => dish.tags.includes(selectedFilter)),
    [selectedFilter]
  );

  return (
    <div className={styles.mobileScreen}>
      <div className={styles.mobileStatusBar}>
        <span>Dinner</span>
        <LayoutGrid size={14} />
      </div>
      <AnimatePresence mode="wait">
        {screenId === 'menu-search' && (
          <motion.div
            key="menu-search"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.deliveryHomeHeader}>
              <div className={styles.deliveryLocation}>
                <MapPin size={15} />
                <div>
                  <span>Deliver to</span>
                  <strong>Gurgaon</strong>
                </div>
              </div>
              <button type="button" className={styles.filterAction} onClick={() => goToStep('dietary-filter')}>
                Dietary filters
              </button>
            </div>
            <div className={styles.deliverySearch}>Search cuisines, dishes, or dietary needs</div>
            <div className={styles.homeSectionHeader}>
              <strong>Fast dinner options</strong>
              <span>Nearby picks</span>
            </div>
            <div className={styles.restaurantList}>
              {study.dietaryBrowseRestaurants.map((restaurant, index) => (
                <article key={restaurant.name} className={styles.restaurantCard}>
                  <div className={styles.restaurantThumb} data-variant={index + 2} aria-hidden="true" />
                  <div className={styles.restaurantContent}>
                    <strong>{restaurant.name}</strong>
                    <span>{restaurant.cuisine}</span>
                    <div className={styles.restaurantMeta}>
                      <span>
                        <Star size={12} fill="currentColor" />
                        {restaurant.rating}
                      </span>
                      <span>{restaurant.deliveryTime}</span>
                      <span>{restaurant.deliveryFee}</span>
                    </div>
                    <span className={styles.dietaryTrigger}>{restaurant.dietaryNote}</span>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        )}

        {screenId === 'dietary-filter' && (
          <motion.div
            key="dietary-filter"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.filterIntroCard}>
              <span className={styles.phoneEyebrow}>Dietary filters</span>
              <h4>Pick what works for you</h4>
              <p>Show only dishes that already match your needs.</p>
            </div>
            <div className={styles.filterGrid}>
              {study.dietaryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={filter === selectedFilter ? styles.filterChipActive : styles.filterChip}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button
              type="button"
              className={styles.primaryAction}
              onClick={() => goToStep('filtered-results')}
            >
              Show matching dishes
            </button>
          </motion.div>
        )}

        {screenId === 'filtered-results' && (
          <motion.div
            key="filtered-results"
            className={styles.phonePane}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className={styles.filterRow}>
              {study.dietaryFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={filter === selectedFilter ? styles.filterChipActive : styles.filterChip}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className={styles.resultHeader}>
              <div>
                <span className={styles.phoneEyebrow}>Results</span>
                <strong>Matches for {selectedFilter}</strong>
              </div>
              <button type="button" className={styles.ghostBadge}>
                <Star size={14} />
                4.7+
              </button>
            </div>
            <div className={styles.resultList}>
              {filteredDishes.map((dish) => (
                <motion.div
                  key={`${selectedFilter}-${dish.name}`}
                  className={styles.dishCard}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  whileHover={{ y: -3 }}
                >
                  <div className={styles.dishCardHeader}>
                    <div className={styles.dishThumb} aria-hidden="true" />
                    <div>
                      <strong>{dish.name}</strong>
                      <span>{dish.restaurant}</span>
                    </div>
                  </div>
                  <p>{dish.blurb}</p>
                  <div className={styles.dishTags}>
                    {dish.tags.map((tag) => (
                      <span key={tag} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FoodDeliveryCaseStudyPage({ onBackHome }) {
  const learningCards = [
    {
      title: 'Balance delight with trust',
      body: study.learnings[0],
      accent: 'personal',
      featured: true,
    },
    {
      title: 'Fix the decision point earlier',
      body: study.learnings[1],
      accent: 'dietary',
    },
    {
      title: 'Make the rollout part of the concept',
      body: study.learnings[2],
      accent: 'neutral',
    },
  ];

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

      <Chapter label="Problem" title="Two weak spots in the experience">
        <div className={styles.problemGrid}>
          {study.problems.map((problem) => (
            <article key={problem.title} className={styles.problemCard} data-tone={problem.accent}>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter label="Personas" title="Who feels it first">
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
        title="Yearly Wrap"
        intro={study.wrapOverview}
        steps={study.wrapSteps}
        tone="personal"
        renderPhone={(screenId, _progress, goToStep) => <WrapPhone screenId={screenId} goToStep={goToStep} />}
      />

      <CaseStudyShowcase
        label="Solution 2"
        title="Dietary Filters"
        intro={study.filterOverview}
        steps={study.filterSteps}
        tone="dietary"
        renderPhone={(screenId, _progress, goToStep) => <FilterPhone screenId={screenId} goToStep={goToStep} />}
      />

      <Chapter label="Impact" title="What should improve">
        <div className={styles.metricsGrid}>
          {study.metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={styles.metricCard}
              data-tone={index % 2 === 0 ? 'personal' : 'dietary'}
            >
              <strong>{metric.target}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter label="Rollout" title="How I would ship it">
        <div className={styles.rolloutList}>
          {study.rollout.map((item, index) => (
            <article key={item} className={styles.rolloutCard} data-tone="neutral">
              <span>{`0${index + 1}`}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter label="After rollout" title="What I would improve next">
        <div className={styles.reflectionGrid}>
          {study.futureOpportunities.map((item, index) => (
            <article
              key={item}
              className={styles.reflectionCard}
              data-tone={index % 2 === 0 ? 'personal' : 'dietary'}
            >
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Chapter>

      <Chapter
        label="What I learned"
        title="What this case study sharpened for me"
        className={styles.learningChapter}
      >
        <div className={styles.learningGrid}>
          {learningCards.map((item) => (
            <article
              key={item.title}
              className={`${styles.learningCard} ${item.featured ? styles.learningCardFeatured : ''}`}
              data-tone={item.accent}
            >
              <span className={styles.learningKicker}>Learning</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Chapter>
    </main>
  );
}

export default FoodDeliveryCaseStudyPage;
