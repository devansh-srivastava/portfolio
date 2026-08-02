import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import MeriFileStoryPage from './pages/MeriFileStoryPage';
import FoodDeliveryCaseStudyPage from './pages/FoodDeliveryCaseStudyPage';
import DatingAppCaseStudyPage from './pages/DatingAppCaseStudyPage';
import { routes } from './lib/routes';

function getRouteFromHash(hash) {
  return hash || routes.home;
}

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    if (!window.location.hash) {
      window.history.replaceState(null, '', routes.home);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [route]);

  if (route === routes.meriFileStory) {
    return (
      <MeriFileStoryPage
        onBackHome={() => {
          window.location.hash = routes.home;
        }}
      />
    );
  }

  if (route === routes.foodDeliveryCaseStudy) {
    return (
      <FoodDeliveryCaseStudyPage
        onBackHome={() => {
          window.location.hash = routes.home;
        }}
      />
    );
  }

  if (route === routes.datingAppCaseStudy) {
    return (
      <DatingAppCaseStudyPage
        onBackHome={() => {
          window.location.hash = routes.home;
        }}
      />
    );
  }

  return <HomePage />;
}

export default App;
