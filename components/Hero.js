"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./ui/Button";
import Section from "./ui/Section";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.3
        }
    }
};

const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, 100]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    const headline = "The Future of Giving. Redefined by AI.";

    return (
        <Section className="relative min-h-screen flex items-center pt-48 pb-24 overflow-hidden bg-slate-50/50">
            {/* Cinematic Background Blobs */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-24 -right-24 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[80px] opacity-40 will-change-transform"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute -bottom-24 -left-24 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[80px] opacity-40 will-change-transform"
            />

            <div className="container mx-auto grid lg:grid-cols-2 lg:gap-20 items-center">
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/10 shadow-sm mb-12"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-bold text-[10px] uppercase tracking-[0.15em]">Pioneering the Future of Food Loop</span>
                    </motion.div>

                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-6xl md:text-8xl font-bold leading-[0.9] mb-10 perspective-1000"
                    >
                        {headline.split(" ").map((word, i) => (
                            <span key={i} className="inline-block mr-4 whitespace-nowrap overflow-hidden py-2">
                                {word.split("").map((char, j) => (
                                    <motion.span
                                        key={j}
                                        variants={charVariants}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed"
                    >
                        We are building the intelligent infrastructure for zero-waste cities. Using <strong className="text-primary">Computer Vision</strong> and <strong className="text-primary">Autonomous Matching</strong>, we scan, analyze nutritional value, and redistribute surplus in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 1 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button variant="primary" className="!px-10 !py-4 text-lg">Explore the Vision</Button>
                        <Button variant="outline" className="!px-10 !py-4 text-lg">Learn More</Button>
                    </motion.div>
                </div>

                <motion.div
                    style={{ y: y1, rotate }}
                    initial={{ opacity: 0, x: 100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative z-10 p-2">
                        <div className="glass rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/40 ring-1 ring-black/5">
                            <div className="bg-white/50 p-10 border-b border-primary/5">
                                <div className="flex justify-between items-center mb-10">
                                    <span className="font-bold text-slate-400 tracking-widest text-xs uppercase">SevaNetz Protocol</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">Live matching</span>
                                    </div>
                                </div>
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.5 + (i * 0.2), duration: 1.2, ease: "easeOut" }}
                                        className="flex gap-6 p-4 mb-5 glass rounded-3xl border border-white"
                                    >
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                                            {['🍎', '🍞', '🥛'][i - 1]}
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="h-3 w-32 bg-primary/10 rounded-full mb-3" />
                                            <div className="h-2 w-full bg-slate-50 rounded-full" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-8 bg-white/80">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Syncing Ecosystem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
