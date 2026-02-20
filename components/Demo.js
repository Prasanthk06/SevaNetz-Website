"use client";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { motion } from "framer-motion";
import { Smartphone, Layout, PieChart } from "lucide-react";

// Import screenshots
import scannerImg from "../assets/WhatsApp Image 2026-02-20 at 08.43.53 (2).jpeg";
import mapImg from "../assets/WhatsApp Image 2026-02-20 at 08.43.53 (1).jpeg";
import profileImg from "../assets/WhatsApp Image 2026-02-20 at 08.43.53.jpeg";

export default function Demo() {
    const screens = [
        {
            title: "Visionary Scanner",
            desc: "Using computer vision to scan surplus and instantly generate nutritional profiles and safety logs.",
            icon: <Smartphone className="text-primary" size={24} />,
            image: scannerImg
        },
        {
            title: "AI Matching Grid",
            desc: "Real-time visualization of a city's food loop and optimized demand matching.",
            icon: <Layout className="text-secondary" size={24} />,
            image: mapImg
        },
        {
            title: "Impact Analytics",
            desc: "Granular data insights for partners to track their mission progress.",
            icon: <PieChart className="text-primary" size={24} />,
            image: profileImg
        }
    ];

    return (
        <Section id="demo" className="bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold uppercase text-sm mb-4 block tracking-widest">The Interface</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 italic text-slate-900">Designed for Impact.</h2>
                    <p className="text-lg text-slate-600">
                        A high-fidelity glimpse into the tools we are building to simplify the global food cycle.
                    </p>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {screens.map((screen, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.9 },
                                show: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group"
                        >
                            <Card className="mb-8 p-0 overflow-hidden !rounded-[2.5rem] border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2">
                                <div className="aspect-[9/16] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:opacity-100 opacity-50 transition-opacity" />

                                    <motion.div
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="relative z-10 w-full h-full"
                                    >
                                        <img
                                            src={screen.image.src || screen.image}
                                            alt={screen.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                                </div>
                            </Card>
                            <div className="px-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div
                                        whileHover={{ rotate: 15, scale: 1.2, color: "#2D5A27" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        className="flex-shrink-0"
                                    >
                                        {screen.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{screen.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {screen.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
