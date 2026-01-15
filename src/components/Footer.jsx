import React from 'react';
import { Github, Linkedin, Twitter, Terminal, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex items-center gap-2">
                        <div className="bg-sky-500 p-1 rounded-md shadow-md shadow-sky-500/20">
                            <Terminal className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white">DevPortfolio</span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        Built with precision and passion. ©{new Date().getFullYear()}. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a href="https://github.com/robel2712" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all">
                            <Github size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://x.com/GetanehRob" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
