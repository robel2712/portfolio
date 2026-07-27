"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { APP_CONTENT } from '../constants';
import img from '../assets/IMG_9534 copy.jpg';
import { Download } from 'lucide-react';
import cv from '../assets/resume.pdf'
import { track } from '@vercel/analytics';

const Experience = () => {
  const { experience } = APP_CONTENT;
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Profile + Bio */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="w-80 aspect-[4/4] rounded-2xl overflow-hidden bg-surface border border-border mb-6">
              <img
                src={img}
                alt="Robel Getaneh"
                loading='lazy'
                className="w-80 h-full object-cover"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 leading-tight">
              About Me
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Full-stack developer with over a year of experience building web applications.
              I focus on writing software that scales with the business.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'Node.js', 'Vercel', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted bg-surface border border-border rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={cv}
              onClick={()=>track("cv_download")}
              download={true}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-primary border border-border rounded-pill hover:bg-surface-hover transition-colors"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          {/* Right: Timeline */}
          <div className="lg:col-span-3">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                Experience
              </h2>
              <p className="text-secondary">
                Where I have worked and what I have done.
              </p>
            </motion.div>

            <div className="space-y-6 relative border-l border-border ml-3">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={reduce ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent border-2 border-canvas" />

                  <div className="p-5 rounded-2xl border border-border bg-surface">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-semibold text-text-primary">{item.role}</h3>
                        {item.company && (
                          <p className="text-sm text-accent">{item.company}</p>
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted px-2.5 py-1 bg-surface-hover rounded-lg border border-border w-fit">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary leading-relaxed">
                          <span className="mr-2.5 mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
