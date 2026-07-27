"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { APP_CONTENT } from '../constants';
import TechStackSlider from './TechStackSlider';

const Skills = () => {
  const { skills, techStackIcons } = APP_CONTENT;
  const reduce = useReducedMotion();

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Tech Stack Slider */}
        <div className="mb-20">
          <TechStackSlider techStackIcons={techStackIcons} />
        </div>

        {/* Skills */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            What I Do
          </h2>
          <p className="text-secondary">
            End-to-end development with a focus on performance and clean architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-bg flex items-center justify-center mb-4">
                <skill.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-1">{skill.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
