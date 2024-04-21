// pages/portfolio.js

import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills';
import Footer from './components/footer';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
