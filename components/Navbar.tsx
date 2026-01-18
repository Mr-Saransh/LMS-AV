'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePayment } from '@/hooks/usePayment';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { handlePayment, loading } = usePayment();

    return (
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 fixed w-full z-50 top-0 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
                            <Image
                                src="/logo.png"
                                alt="Apni Vidya"
                                width={180}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="#home" className="text-slate-600 hover:text-blue-600 font-bold transition-all hover:-translate-y-0.5">Home</Link>
                        <Link href="#courses" className="text-slate-600 hover:text-blue-600 font-bold transition-all hover:-translate-y-0.5">Courses</Link>
                        <Link href="#about" className="text-slate-600 hover:text-blue-600 font-bold transition-all hover:-translate-y-0.5">Why Us?</Link>
                        <button
                            onClick={() => handlePayment(100, "All-in-One Skill Mastery")}
                            disabled={loading}
                            className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg active:scale-95 disabled:opacity-70"
                        >
                            {loading ? "Processing..." : "Join Now"}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-blue-600 p-2 transition-colors"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 animate-fade-in">
                    <div className="px-4 pt-4 pb-6 space-y-3 shadow-xl">
                        <Link href="#home" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 hover:text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">Home</Link>
                        <Link href="#courses" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 hover:text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">Courses</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-slate-600 hover:text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">Why Us?</Link>
                        <div className="pt-4">
                            <button
                                onClick={() => handlePayment(100, "All-in-One Skill Mastery")}
                                disabled={loading}
                                className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-70"
                            >
                                {loading ? "Processing..." : "Join Live Class"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
