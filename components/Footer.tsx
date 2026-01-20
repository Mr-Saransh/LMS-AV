import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src="/logo-new.png"
                                alt="Apni Vidya"
                                width={60}
                                height={60}
                                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering students with real-world skills through live interactive classes taught by IITians.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/1CW3KDxSqx/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="https://x.com/apnividya" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center font-bold text-lg w-9 h-9">𝕏</a>
                            <a href="https://www.instagram.com/apnividya?igsh=Y3pieGJjcGV5ZGJt" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="https://www.linkedin.com/company/apnividya/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#home" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="#courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
                            <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/become-mentor" className="hover:text-blue-400 transition-colors">Become a Mentor</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/legal#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/legal#terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/legal#refund" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>Agartala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>+91 60093 96197</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>apnividya.in@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Apni Vidya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
