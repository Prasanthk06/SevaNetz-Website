"use client";
import Section from "./ui/Section";
import { motion } from "framer-motion";
import { Brain, Cpu, Network, Zap } from "lucide-react";

export default function Technology() {
    const steps = [
        { icon: <Cpu />, label: "Inventory Analysis", desc: "Understanding surplus patterns before they become waste." },
        { icon: <Brain />, label: "Intelligent Link", desc: "Our engine creates the path between surplus and demand." },
        { icon: <Network />, label: "Adaptive Logistics", desc: "Real-time routing for a zero-waste delivery flow." }
    ];

    return (
        <Section id="technology" className="bg-primary text-white overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05
                                }
                            }
                        }}
                        className="text-4xl md:text-5xl font-bold mb-6 italic"
                    >
                        {"Engineering the Food Loop".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, x: -10 },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.3
                                        }
                                    }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <p className="text-lg opacity-80">
                        Our vision is powered by the <span className="text-secondary font-bold underline decoration-2 underline-offset-4">SevaMatch Protocol</span>—leveraging <span className="font-bold text-white">Computer Vision</span> for nutrient analysis and <span className="font-bold text-white">Autonomous Matching</span> for friction-less redistribution.
                    </p>
                </div>

                <div className="relative">
                    {/* Animated Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-1/2 z-0 overflow-hidden">
                        <motion.div
                            initial={{ left: "0%" }}
                            animate={{ left: "calc(100% - 6rem)" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
                            className="absolute top-0 w-24 h-full bg-secondary shadow-[0_0_15px_#F28C28]"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: i * 0.2, duration: 0.5, ease: "easeOut" }}
                                className="glass bg-white/10 border-white/20 p-8 rounded-4xl text-center backdrop-blur-md"
                            >
                                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.label}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </Section>
    );
}