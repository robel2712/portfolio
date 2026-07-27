"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? 'w-[calc(100%-2rem)] max-w-xl' : 'w-[calc(100%-2rem)] max-w-lg'
        }`}
      >
        <div className={`hidden lg:flex items-center justify-between px-2 py-2 rounded-lg border transition-all duration-300 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-xl border-border shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-transparent border-transparent'
        }`}>
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-muted hover:text-text-primary rounded-full hover:bg-surface transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted hover:text-text-primary hover:bg-surface transition-colors"
              aria-label="Toggle theme"
            >
              
            </button>
              <ThemeToggle/>
            <a
              href="#contact"
              className="px-4 py-1.5 text-sm font-semibold text-black dark:text-white bg-accent rounded-pill hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu button and theme toggle */}
      <div className='sticky lg:hidden top-4 left-2'>
        <ThemeToggle/>
        </div>
        
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 right-4 z-50 p-2 rounded-pill bg-surface border border-border md:hidden"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
     
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-16 z-50 p-4 rounded-2xl bg-transparent dark:bg-transparent backdrop-blur-sm border border-border shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-1 ">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted hover:text-text-primary rounded-xl hover:bg-surface-hover transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 text-sm font-semibold text-black dark:text-white bg-accent rounded-xl text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
