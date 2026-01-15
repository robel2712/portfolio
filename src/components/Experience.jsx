import React from 'react';
import { APP_CONTENT } from '../constants';
import img from '../assets/IMG_9534 copy.jpg';
const Experience = () => {
    const { experience } = APP_CONTENT;

    return (
        <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Image/Branding */}
                    <div className="relative block lg:block">
                        {/* Profile Image */}
                    <div className="rounded-2xl w-70 lg:w-80 lg:rounded-2xl shadow-2xl mb-8 bg-white dark:bg-slate-800 relative group">
                            <div className="w-full h-full rounded-lg lg:rounded-lg overflow-hidden">
                                <img src={img} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' alt="profile" />
                            </div>
                            {/* <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors"></div> */}
                        </div>

                        {/* Bio Content - Now below the image */}
                        <div>
                            {/* <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-bold text-sky-600 dark:text-sky-400">
                                AVAILABLE FOR PROJECTS
                            </div> */}
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                                I build <span className="text-sky-500">scalable</span><br />digital experiences.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
                                I’m a Full-Stack Developer with over 1 years of experience. My philosophy is simple: write software that scales as fast as the business does.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {['React', 'Node.js', 'Vercel', 'MongoDB'].map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-mono font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button className="border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-slate-900 dark:text-white px-8 py-3.5 rounded-lg font-bold transition-all flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                Download Full CV
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Professional Journey</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-12">A timeline of my career milestones and technical contributions.</p>

                        <div className="space-y-12 relative border-l border-slate-200 dark:border-slate-800 pl-8 ml-3 md:ml-0">
                            {experience.map((item, index) => (
                                <div key={index} className="relative group">
                                    {/* Dot on timeline */}
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-sky-500 shadow-md"></div>

                                    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-sky-500/20 dark:hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md dark:shadow-none">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                                                <p className="text-sky-600 dark:text-sky-400 font-medium">{item.company}</p>
                                            </div>
                                            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 w-fit">
                                                {item.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 flex-shrink-0"></span>
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
