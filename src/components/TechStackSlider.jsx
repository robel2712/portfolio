"use client";
import React from 'react';
import { useReducedMotion } from 'motion/react';

const slideLeftKeyframes = `
@keyframes slide-left {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
`;

const TechStackSlider = ({ techStackIcons }) => {
  const duplicatedStack = [...techStackIcons, ...techStackIcons];
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden py-6">
      <style>{slideLeftKeyframes}</style>
      <p className="text-lg mb-6 text-text-primary font-semibold">Familiar with</p>
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

      <div
        className="flex"
        style={{
          width: 'max-content',
          gap: '1.5rem',
          paddingRight: '1.5rem',
          animation: reduce ? 'none' : 'slide-left 30s linear infinite',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <a
            key={`${tech.name}-${index}`}
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-border-alt transition-all group flex-shrink-0"
            style={{ textDecoration: 'none' }}
          >
            <tech.icon
              className="h-5 w-5 transition-transform duration-200 group-hover:scale-110"
              style={{ color: tech.color }}
            />
            <span className="text-sm font-medium text-secondary group-hover:text-text-primary transition-colors">
              {tech.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlider;
