import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-canvas text-text-primary transition-colors duration-300"
      >
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
