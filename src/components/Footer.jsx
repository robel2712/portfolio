import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Robel Getaneh
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/robel2712"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/GetanehRob"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
