"use client";
import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">
            Let&apos;s Work Together
          </h2>
          <p className="text-secondary max-w-lg">
            Have a project in mind or want to discuss an opportunity?
            I am always open to new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl text-text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl text-text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project inquiry, job offer, etc."
                  className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl text-text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-xl text-text-primary placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-black dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-1 ease-in-out duration-150" />
              </button>
            </form>
          </motion.div>

          {/* Status + Info */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="p-5 rounded-2xl border border-border bg-surface flex items-center gap-4">
              <div className="w-10 h-10 bg-accent-bg rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-accent">Status</span>
                <h4 className="text-sm font-semibold text-text-primary">Available for Q4 2026</h4>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-border bg-surface">
              <h4 className="text-sm font-semibold text-text-primary mb-3">Connect</h4>
              <div className="space-y-2">
                <a href="https://github.com/robel2712" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary hover:text-text-primary transition-colors">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  GitHub
                </a>
                <a href="https://x.com/GetanehRob" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary hover:text-text-primary transition-colors">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  Twitter / X
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
