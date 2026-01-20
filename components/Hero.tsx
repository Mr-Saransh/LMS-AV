'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { usePayment } from '@/hooks/usePayment';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Hero() {
    const { handlePayment, loading } = usePayment();

    return (
        <div id="home" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="lg:w-1/2 text-center lg:text-left z-10 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 font-semibold text-sm mb-8 animate-fade-in-up hover:bg-blue-100 transition-colors cursor-default">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                            </span>
                            Live Admissions Open 2026
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Master Skills with <br className="hidden lg:block" />
                            <span className="text-white bg-blue-600 px-2 rounded-lg transform -skew-x-6 inline-block">IITian Guides</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Apni Vidya offers live, interactive classes for school students. Learn real-world skills directly from the experts, not just recorded videos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => handlePayment(1, "Live Classes Combo")}
                                disabled={loading}
                                className="group w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {loading ? "Processing..." : "Enroll Now for $1"} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500">
                            <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">10k+</span>
                                <span>Students</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">50+</span>
                                <span>Mentors</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                <span className="font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">4.9/5</span>
                                <span>Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Animation */}
                    <div className="lg:w-1/2 w-full max-w-lg lg:max-w-none order-1 lg:order-2">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] p-6 shadow-2xl backdrop-saturate-150">
                                <DotLottieReact
                                    src="https://lottie.host/a8cb6da2-0d1f-43bd-aa91-b2f56f7a311f/lFIvlqHSZE.lottie"
                                    loop
                                    autoplay
                                    className="w-full h-auto"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce shadow-blue-200/50">
                                    <div className="bg-orange-100 p-3 rounded-xl">
                                        <Sparkles className="h-6 w-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Top Rated</p>
                                        <p className="text-slate-900 font-extrabold text-sm">#1 Skill Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
