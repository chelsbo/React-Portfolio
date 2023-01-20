// Import React
import React from 'react';

// Import components
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Qualifications from './components/Qualifications.js';
import Services from './components/Services.js';
import Portfolio from './components/Portfolio.js';
import Projects from './components/Projects.js';
import Testimonials from './components/Testimonials.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

// Import style sheet
import './css/style.css';

function App() {
  return  (
    <div>
      <Navigation />

      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolio />
      <Projects />
      <Testimonials />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
