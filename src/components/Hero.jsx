import React from 'react';
import { APP_CONTENT } from '../constants';
import { ArrowUpRight, Code2 } from 'lucide-react';

const Hero = () => {
    const { title, subtitle, ctaPrimary, ctaSecondary } = APP_CONTENT.hero;

    return (
        <section id="about" className="relative pt-32 pb-12 overflow-visible min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700/50 text-xs font-bold text-sky-600 dark:text-sky-400 w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        {/* AVAILABLE FOR PROJECTS */}
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
                        Building <br />
                        <span className="text-slate-700 dark:text-slate-200">Scalable</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Digital <br /> Experiences.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-all hover:scale-105 shadow-lg shadow-sky-500/25"
                        >
                            {ctaPrimary}
                            <ArrowUpRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 dark:text-slate-300 bg-white border border-slate-200 hover:bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700/50 dark:hover:bg-slate-800 dark:hover:text-white transition-all rounded-lg"
                        >
                            {ctaSecondary}
                        </a>
                    </div>
                </div>

                {/* Right Content - Visual */}
                <div className="hidden lg:block relative">
                    <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white/50 dark:bg-slate-800/50">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="text-xs text-slate-500 font-mono ml-2">~/projects/architecture.ts</div>
                        </div>
                        <pre className="text-sm font-mono text-slate-600 dark:text-slate-300 overflow-x-auto">
                            <code>
                                <span className="text-purple-600 dark:text-purple-400">class</span> <span className="text-yellow-600 dark:text-yellow-300">Experience</span> <span className="text-purple-600 dark:text-purple-400">{`{`}</span>{'\n'}
                                {'  '}<span className="text-purple-600 dark:text-purple-400">constructor</span>() <span className="text-purple-600 dark:text-purple-400">{`{`}</span>{'\n'}
                                {'    '}<span className="text-sky-600 dark:text-sky-400">this</span>.focus = <span className="text-green-600 dark:text-green-300">"Scalability"</span>;{'\n'}
                                {'    '}<span className="text-sky-600 dark:text-sky-400">this</span>.stack = [<span className="text-green-600 dark:text-green-300">"React"</span>, <span className="text-green-600 dark:text-green-300">"Node"</span>];{'\n'}
                                {'  '}<span className="text-purple-600 dark:text-purple-400">{`}`}</span>{'\n'}
                                <span className="text-purple-600 dark:text-purple-400">{`}`}</span>
                            </code>
                        </pre>
                        <div className="mt-8 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-8 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700">
                            <Code2 className="h-16 w-16 text-slate-400 dark:text-slate-600" />
                        </div>
                    </div>
                    {/* Background elements to make it pop */}
                    <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-slate-200 dark:border-slate-800 rounded-2xl opacity-50"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
