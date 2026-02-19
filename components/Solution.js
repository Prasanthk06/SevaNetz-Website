"use client";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { motion } from "framer-motion";
import { Zap, MapPin, BarChart3 } from "lucide-react";

export default function Solution() {
    const visions = [
        {
            title: "Real-Time Synthesis",
            description: "Our engine instantly maps surplus to need, removing the friction of manual coordination.",
            icon: <Zap size={32} />,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Optimized Flow",
            description: "Sustainable logistics ensures every meal is moved with minimal environmental cost.",
            icon: <MapPin size={32} />,
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            title: "Transparency Protocol",
            description: "A verifiable trail of impact for every donation, building trust in the food loop.",
            icon: <BarChart3 size={32} />,
            color: "bg-blue-100 text-blue-600"
        }
    ];

    return (
        <Section id="solution">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Concept</span>
                        <motion.h2
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
                        >
                            {"A smarter way to ".split("").map((char, i) => (
                                <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>{char}</motion.span>
                            ))}<br />
                            <span className="text-gradient">
                                {"Bridge the Gap.".split("").map((char, i) => (
                                    <motion.span key={i} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>{char}</motion.span>
                                ))}
                            </span>
                        </motion.h2>
                        <p className="text-lg text-foreground/70 mb-10">
                            We are reimagining waste as an untapped resource. SevaNetz is the protocol for a more resilient, localized food economy.
                        </p>

                        <div className="space-y-6">
                            {visions.map((f, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className={`p-3 rounded-xl ${f.color} flex-shrink-0`}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">{f.title}</h4>
                                        <p className="text-foreground/60">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full" />
                        <div className="relative grid grid-cols-2 gap-4">
                            <Card className="mt-12">
                                <div className="h-4 w-20 bg-primary/20 rounded-full mb-4" />
                                <div className="h-2 w-full bg-slate-100 rounded-full mb-2" />
                                <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                            </Card>
                            <Card>
                                <div className="flex justify-between mb-4">
                                    <div className="h-8 w-8 rounded-lg bg-secondary/20" />
                                    <div className="h-4 w-12 bg-slate-100 rounded-full" />
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full" />
                            </Card>
                            <Card className="col-span-2 glass !bg-primary/5 border-primary/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">AI</div>
                                    <div>
                                        <p className="text-sm font-bold">Optimization complete</p>
                                        <p className="text-xs text-foreground/50">3 pickups scheduled in your area</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
