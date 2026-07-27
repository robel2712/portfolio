import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full text-muted hover:text-text-primary hover:bg-surface transition-colors"
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-label="Toggle theme"
    >
      <Sun className={`h-4 w-4 transition-all duration-300 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
      <Moon className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
    </button>
  );
};

export default ThemeToggle;
