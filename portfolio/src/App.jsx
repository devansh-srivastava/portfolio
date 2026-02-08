/**
 * App.jsx - Main Application Component
 * 
 * This is the root component that assembles all the major sections
 * of the portfolio website. The sections are rendered in order:
 * 1. Hero - Introduction and main CTA
 * 2. Experience - Work history with sticky card effect
 * 3. Skills - Product and technical skills showcase
 * 4. CaseStudies - Product case studies and analyses
 * 5. Contact - Contact information and social links
 * 
 * @author Devansh Srivastava
 */

import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

/**
 * Main App Component
 * Renders all portfolio sections in a single-page scroll layout
 */
function App() {
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

export default App
