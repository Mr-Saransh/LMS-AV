'use client';

import { ArrowRight } from 'lucide-react';
import { usePayment } from '@/hooks/usePayment';

export default function CourseGrid() {
    const { handlePayment, loading } = usePayment();

    const courses = [
        {
            title: "Personality Development",
            price: "$1",
            icon: (
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/personality-development-growth-animation-gif-download-11825159.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-20 h-20 object-cover rounded-xl mix-blend-multiply"
                />
            ),
            color: "bg-purple-100",
            desc: "Build confidence and communication skills"
        },
        {
            title: "Computer with AI",
            price: "$1",
            icon: (
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/hand-with-ai-chip-animation-gif-download-11578688.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-20 h-20 object-cover rounded-xl mix-blend-multiply"
                />
            ),
            color: "bg-blue-100",
            desc: "Modern computing fundamentals & GenAI"
        },
        {
            title: "Coding Basics",
            price: "$1",
            icon: (
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/coding-animation-gif-download-8860652.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-20 h-20 object-cover rounded-xl mix-blend-multiply"
                />
            ),
            color: "bg-indigo-100",
            desc: "Start your programming journey with logic"
        },
        {
            title: "Cyber Security",
            price: "$1",
            icon: (
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/cyber-security-animation-gif-download-5553286.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-20 h-20 object-cover rounded-xl mix-blend-multiply"
                />
            ),
            color: "bg-slate-100",
            desc: "Learn to stay safe in the digital world"
        },
        {
            title: "Financial Literacy",
            price: "$1",
            icon: (
                <video
                    src="https://cdnl.iconscout.com/lottie/premium/thumb/financial-literacy-animation-gif-download-10720478.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-20 h-20 object-cover rounded-xl mix-blend-multiply"
                />
            ),
            color: "bg-green-100",
            desc: "Money management skills for young minds"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Individual Mastery Courses</h2>
                    <p className="text-slate-600">Focus on specific skills with our specialized modules.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                            {/* Thumbnail Section */}
                            <div className={`w-full h-48 ${course.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                                <div className="transform scale-150">
                                    {course.icon}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                                    {course.title === "Personality Development" && "Boost confidence, master public speaking, and develop a winning personality."}
                                    {course.title === "Computer with AI" && "Master computing basics and step into the future with practical AI skills."}
                                    {course.title === "Coding Basics" && "Start your journey with Python and logic building blocks for beginners."}
                                    {course.title === "Cyber Security" && "Learn digital safety, ethical hacking basics, and online protection."}
                                    {course.title === "Financial Literacy" && "Understand money, savings, and investments to build a strong foundation."}
                                </p>

                                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-50">
                                    <span className="text-2xl font-bold text-slate-900">{course.price}</span>
                                    <button
                                        onClick={() => handlePayment(1, course.title)}
                                        disabled={loading}
                                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center gap-2 disabled:opacity-70 disabled:hover:shadow-none"
                                    >
                                        Enroll <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
