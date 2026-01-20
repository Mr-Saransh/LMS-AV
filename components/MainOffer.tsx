'use client';

import { Zap } from 'lucide-react';
import { usePayment } from '@/hooks/usePayment';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MainOffer() {
    const { handlePayment, loading } = usePayment();


    const features = [
        "Personality Development",
        "Computer Skills with AI",
        "Coding & Programming",
        "Cyber Security Basics",
        "Financial Literacy",
        "Live Doubt Solving"
    ];

    return (
        <section id="courses" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Master Every Skill</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">Detailed live courses designed to make you future-ready.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main Combo Card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                        <div className="p-10 md:w-3/5 flex flex-col justify-center">
                            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6 w-fit">
                                Most Popular Choice
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">All-in-One Skill Mastery</h3>
                            <p className="text-slate-600 mb-8 text-lg">
                                Get access to all 5 premium courses in one comprehensive live program. The best value for ambitious students.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="h-8 w-8 flex-shrink-0">
                                            <DotLottieReact
                                                src="https://lottie.host/3f85135e-5480-4992-8fa2-69416dbece53/Itw7fSti07.lottie"
                                                loop
                                                autoplay
                                            />
                                        </div>
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo-600 p-10 md:w-2/5 flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>

                            <Zap className="h-12 w-12 text-yellow-300 mb-4" />
                            <div className="flex items-baseline gap-1 mb-2">
                                <span className="text-2xl font-medium opacity-80">$</span>
                                <span className="text-5xl font-extrabold">1</span>
                                <span className="text-xl opacity-80">/mo</span>
                            </div>
                            <p className="text-indigo-100 mb-8">Billed annually at $1200</p>

                            <button
                                onClick={() => handlePayment(1, "All-in-One Skill Mastery")}
                                disabled={loading}
                                className="w-full bg-white text-indigo-700 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg disabled:opacity-75"
                            >
                                {loading ? "Processing..." : "Enroll Now"}
                            </button>
                            <p className="mt-4 text-xs text-indigo-200">100% Money-back guarantee</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
