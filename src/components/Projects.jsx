"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { APP_CONTENT } from '../constants';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const { projects } = APP_CONTENT;
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Selected Work
          </h2>
          <p className="text-secondary">
            Projects I have built and shipped.
          </p>
        </motion.div>

        <div className="space-y-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-border bg-surface hover:bg-surface-hover hover:border-border-alt transition-all"
              >
                {/* Project icon/image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-surface-hover border border-border flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading='lazy' />
                  ) : (
                    <span className="text-lg font-bold text-muted">{project.title[0]}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted mt-0.5 truncate">{project.subtitle}</p>
                  <p className="text-md text-muted mt-0.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-muted bg-surface-hover rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                  <div className="p-2 rounded-full border border-border group-hover:border-border-alt transition-colors">
                    <ExternalLink className="h-4 w-4 text-muted group-hover:text-text-primary transition-colors" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
