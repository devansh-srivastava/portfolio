import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <Experience />
      <Skills />
      <CaseStudies />
      <Contact />
    </main>
  );
}

export default HomePage;
