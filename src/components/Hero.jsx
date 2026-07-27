"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { APP_CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { name, role, subtitle, availability } = APP_CONTENT.hero;
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Availability badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-accent-bg border border-accent/20"
          >
            {/*  */}
            <span className="text-sm font-medium text-accent">{availability}</span>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm font-mono uppercase tracking-widest text-muted"
          >
            {role}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary"
          >
            {name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-lg sm:text-xl text-secondary max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="pt-4 "
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-black text-white dark:text-black bg-text-primary dark:bg-white rounded-lg hover:opacity-90 transition-opacity group"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
