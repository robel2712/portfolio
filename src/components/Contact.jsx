import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-10 h-0.5 bg-sky-500"></span>
                        <span className="text-sky-500 font-bold tracking-wider text-sm uppercase">Collaborate</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Contact & Testimonials</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                        I'm currently looking for new opportunities and interesting projects.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form */}
                    <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
                        <div className="flex items-center gap-2 mb-8 text-slate-900 dark:text-white">
                            <Send className="w-5 h-5 text-sky-500" />
                            <h3 className="text-xl font-bold">Send a Message</h3>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your full name"
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your.email@example.com"
                                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Project inquiry, job offer, etc."
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Tell me about your project or opportunity..."
                                    rows="6"
                                    className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Testimonials & Info */}
                    <div className="space-y-8">

                        {/* Status Card */}
                        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">Status</span>
                                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Available for Q4 2026</h4>
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="relative">
                            <div className="absolute -left-4 -top-4 text-slate-200 dark:text-slate-800">
                                {/* Large Quote Icon SVG */}
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                </svg>
                            </div>
                            <blockquote className="bg-white dark:bg-slate-800/30 p-8 rounded-2xl border-l-4 border-sky-500 relative z-10 shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent">
                                <p className="text-xl italic text-slate-600 dark:text-slate-300 mb-6">
                                    "An exceptional developer who delivers clean, maintainable code. The attention to detail in the system architecture was beyond what we expected."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500"></div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">Bamlak Gezahegn</div>
                                        <div className="text-sm text-sky-500 dark:text-sky-400">Senior PM, TechCorp</div>
                                    </div>
                                </div>
                            </blockquote>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
