"use client";
import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Upload, Search, Truck } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Visionary Intake",
            desc: "Early partners list surplus through our streamlined protocol designed for speed.",
            icon: <Upload size={40} />,
            id: "01"
        },
        {
            title: "Protocol Matching",
            desc: "Our engine analyzes the urban food loop to find the highest-impact recipient.",
            icon: <Search size={40} />,
            id: "02"
        },
        {
            title: "Verified Loop",
            desc: "Coordinated transit ensures food is repurposed, completing the sustainable cycle.",
            icon: <Truck size={40} />,
            id: "03"
        }
    ];

    return (
        <Section id="how-it-works">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-secondary font-bold uppercase text-sm mb-4 block">SevaNetz Protocol</span>
                        <h2 className="text-4xl md:text-5xl font-bold italic">How the Vision functions.</h2>
                    </div>
                    <p className="text-foreground/60 max-w-sm mb-2">
                        We are refining a three-stage pilot flow to move from concept to global standard.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 relative pt-20">
                    {/* Connecting line for desktop - Centered with icons */}
                    <div className="hidden lg:block absolute top-[5.5rem] left-[15%] right-[15%] h-[1px] bg-slate-200 -z-10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group text-center"
                        >
                            {/* Number Above */}
                            <span className="text-4xl font-black text-slate-300 mb-6 block select-none group-hover:text-primary transition-colors">
                                {step.id}
                            </span>

                            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
