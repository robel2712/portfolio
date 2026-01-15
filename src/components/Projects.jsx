import React, { useState } from 'react';
import { APP_CONTENT } from '../constants';
import { ExternalLink, Github, Code, Rocket } from 'lucide-react';

const Projects = () => {
    const { projects } = APP_CONTENT;
    const [filter, setFilter] = useState('All Work');

    const filters = ['All Work', 'React', 'Node.js', 'GraphQL'];

    // Simple filter logic
    const filteredProjects = projects.filter(project => {
        if (filter === 'All Work') return true;
        return project.techStack.some(tech => tech.includes(filter));
    });

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-10 h-0.5 bg-sky-500"></span>
                            <span className="text-sky-500 font-bold tracking-wider text-sm uppercase">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Building scalable full-stack solutions with technical precision. Architecting robust systems from frontend to infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${filter === f
                                        ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-sky-500/5">
                            {/* Project Image Placeholder */}
                            <div className="h-64 bg-slate-200 dark:bg-slate-800 relative overflow-hidden group-hover:bg-slate-300 dark:group-hover:bg-slate-750">
                                <div className="w-full h-full object-center inset-0 flex items-center justify-center text-slate-500 dark:text-slate-600">
                                    {/* Replace with actual images or better placeholders */}
                                    {/* {project.image === "dashboard" && <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 p-8"><div className="w-full h-full border border-slate-400 dark:border-slate-700 rounded-lg flex items-center justify-center bg-white dark:bg-slate-800/50">Dashboard UI</div></div>}
                                    {project.image === "api" && <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8"><div className="w-full h-full border border-green-900/30 rounded-lg flex items-center justify-center font-mono text-green-500 text-xs text-left p-4">{'GET /api/v1/status\n200 OK'}</div></div>}
                                    {project.image === "messaging" && <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-slate-800 dark:to-indigo-900/20 p-8"><div className="w-full h-full border border-indigo-200 dark:border-slate-700 rounded-lg flex items-center justify-center bg-white/50 dark:bg-transparent">Chat App UI</div></div>}
                                    {project.image === "ai" && <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-slate-900 dark:to-emerald-900/20 p-8"><div className="w-full h-full border border-emerald-200 dark:border-slate-700 rounded-lg flex items-center justify-center bg-white/50 dark:bg-transparent">AI Interface</div></div>} */}
                                <img src={project.image} className='h-full w-full object-cover' alt="bims" />
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.liveUrl} className="p-3 bg-sky-500 rounded-full hover:bg-sky-400 text-white transition-transform hover:scale-110">
                                        <ExternalLink size={24} />
                                    </a>
                                    <a href={project.codeUrl} className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 text-white transition-transform hover:scale-110">
                                        <Github size={24} />
                                    </a>
                                </div>
                                {project.isFeatured && (
                                    <div className="absolute top-4 right-4 bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/20 backdrop-blur-sm">
                                        FEATURED
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">{project.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                                </div>

                                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 block md:hidden">
                                    <div className="flex gap-4">
                                        <a href={project.liveUrl} className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-center py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                                            Live Demo <ExternalLink size={14} />
                                        </a>
                                        <a href={project.codeUrl} className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-center py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700">
                                            View Code <Code size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
