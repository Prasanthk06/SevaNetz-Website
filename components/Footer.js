"use client";
import { Leaf, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#f8faf7] border-t border-primary/5 py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-8 group">
                            <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                                <Leaf className="text-white" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-primary tracking-tight leading-none">SevaNetz</span>
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] leading-none mt-1">Concept</span>
                            </div>
                        </a>
                        <p className="text-slate-600 max-w-sm mb-10 text-lg leading-relaxed">
                            We are engineering the future of sustainable food loops through intelligent redistribution protocols.
                        </p>
                        <div className="flex gap-5">
                            {[Twitter, Github, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:shadow-md transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">The Protocol</h4>
                        <ul className="space-y-5">
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" /> Pilot Program</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" /> AI Matching</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" /> Smart Logistics</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" /> Impact Whitepaper</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Inquiries</h4>
                        <div className="space-y-6">
                            <p className="text-slate-500 text-sm">Interested in becoming a pilot partner?</p>
                            <a href="mailto:pilot@refood.ai" className="flex items-center gap-3 text-primary font-bold hover:underline">
                                <Mail size={18} />
                                pilot@refood.ai
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-sm font-medium text-slate-400">© 2026 ReFood Technologies. A Visionary Prototype.</p>
                    <div className="flex gap-10 text-sm font-semibold text-slate-400">
                        <a href="#" className="hover:text-primary transition-colors">Vision Design</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Mission</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
