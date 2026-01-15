import React from 'react';

const TechStackSlider = ({ techStackIcons }) => {
  // Duplicate the array for seamless infinite scrolling
  const duplicatedStack = [...techStackIcons, ...techStackIcons];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <style>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .slide-track {
          animation: slide-left 30s linear infinite;
          display: flex;
          gap: 3rem;
        }
        
        .slide-track:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .slide-track {
            animation-duration: 25s;
            gap: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .slide-track {
            animation-duration: 20s;
            gap: 1.5rem;
          }
        }
      `}</style>
      
      <div className="relative">
        <div className="slide-track">
          {duplicatedStack.map((tech, index) => (
            <a
              key={`${tech.name}-${index}`}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800/70 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              style={{ textDecoration: 'none' }}
            >
              <tech.icon 
                className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: tech.color }}
              />
              <span 
                className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSlider;