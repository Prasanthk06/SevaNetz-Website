"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { AlertCircle, TrendingUp, Users } from "lucide-react";

function Counter({ value, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplay(latest.toLocaleString(undefined, { maximumFractionDigits: 0 }));
        });
    }, [springValue]);

    return <span ref={ref}>{display}{suffix}</span>;
}

export default function Problem() {
    const systemicGaps = [
        {
            label: "Food Loss & Waste",
            stat: "30% Lost",
            value: 30,
            suffix: "% ",
            icon: <AlertCircle className="text-orange-500" size={32} />,
            desc: "Nearly one-third of all food produced is lost or wasted at various supply chain stages every year.",
            source: "Source: FAO & UNEP"
        },
        {
            label: "Inefficient Redistribution",
            stat: "Distribution Delays & Gaps",
            icon: <Users className="text-primary" size={32} />,
            desc: "Surplus food exists daily but many regions lack systems to match it quickly to demand — leading to preventable waste.",
            source: "Supported by network analyses"
        },
        {
            label: "Tech Potential",
            stat: "AI-Optimized Matching",
            icon: <TrendingUp className="text-secondary" size={32} />,
            desc: "AI-powered computer vision can scan surplus food to find nutritional value and optimize redistribution in real-time.",
            source: "Supported by logistics research"
        }
    ];

    return (
        <Section id="problem" className="bg-soft-green/30">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">The Systemic Glitch</h2>
                    <p className="text-lg text-foreground/70">
                        We don't have a food shortage problem; we have a coordination problem. SevaNetz is the missing layer in the global food cycle.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {systemicGaps.map((stat, i) => (
                        <Card key={i} delay={i * 0.1} className="text-center group">
                            <div className="mb-6 flex justify-center">
                                <div className="p-4 rounded-2xl bg-white shadow-inner group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2 min-h-[4rem] flex items-center justify-center">
                                {stat.value ? (
                                    <><Counter value={stat.value} suffix={stat.suffix} /> {stat.stat?.replace(/[0-9]+% /g, "")}</>
                                ) : (
                                    stat.stat
                                )}
                            </h3>
                            <p className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">{stat.label}</p>
                            <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                                {stat.desc}
                            </p>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-auto">
                                {stat.source}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
