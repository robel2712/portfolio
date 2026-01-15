import React from 'react';
import { APP_CONTENT } from '../constants';
import TechStackSlider from './TechStackSlider';

const Skills = () => {
    const { skills, techStackIcons } = APP_CONTENT;

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Tech Stack Icons Slider */}
                <div className="mb-20">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Familiar with</span>
                    </div>
                    <TechStackSlider techStackIcons={techStackIcons} />
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-6">
                        Core Expertise
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
                        Delivering end-to-end solutions with a focus on performance, accessibility, and architectural integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-800/30 rounded-2xl p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-slate-200 dark:border-slate-700/50 hover:border-sky-500/30 shadow-sm hover:shadow-md dark:shadow-none"
                        >
                            <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <skill.icon className="h-7 w-7 text-sky-500 dark:text-sky-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{skill.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
