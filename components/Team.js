"use client";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

// Team Images
import orwaImg from "../assets/orwa.jpg";
import prasanthImg from "../assets/prasanthk.jpg";
import vigneshImg from "../assets/vigneshg.jpg";
import preethamImg from "../assets/preetham.jpg";

export default function Team() {
    const members = [
        {
            name: "ORWA STAIF",
            quote: "Engineering the infrastructure for a zero-waste world through systemic logic.",
            image: orwaImg,
            color: "border-primary/20"
        },
        {
            name: "PRASANTH K",
            quote: "Defining the ReMatch protocol to bridge global food supply and demand.",
            image: prasanthImg,
            color: "border-secondary/20"
        },
        {
            name: "VIGNESH G",
            quote: "Developing deep-learning models for real-time food flow optimization.",
            image: vigneshImg,
            color: "border-primary/20"
        },
        {
            name: "PREETHAM S",
            quote: "Scaling the partnership network to global pilot cities and beyond.",
            image: preethamImg,
            color: "border-secondary/20"
        }
    ];

    return (
        <Section id="team" className="bg-slate-50/30">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold uppercase text-sm mb-4 block tracking-widest">The Architects</span>
                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="text-4xl md:text-5xl font-bold mb-6 italic text-slate-900"
                    >
                        {"The Minds Behind SevaNetz".split(" ").map((word, i) => (
                            <span key={i} className="inline-block mr-2">
                                {word.split("").map((char, j) => (
                                    <motion.span 
                                        key={j} 
                                        variants={{ 
                                            hidden: { opacity: 0, y: 10 }, 
                                            show: { 
                                                opacity: 1, 
                                                y: 0,
                                                transition: {
                                                    duration: 0.3
                                                }
                                            } 
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </motion.h2>
                    <p className="text-lg text-slate-600">
                        A diverse collective of engineers, designers, and visionaries committed to redefining the future of SevaNetz through the SevaMatch protocol.
                    </p>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {members.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                show: { 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1,
                                    transition: {
                                        duration: 0.8, 
                                        ease: [0.16, 1, 0.3, 1]
                                    }
                                }
                            }}
                        >
                            <Card className={`group relative p-0 overflow-hidden rounded-[2.5rem] bg-white border ${member.color} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                                <div className="p-8 pb-0 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={member.image.src || member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full border-4 border-white shadow-lg relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="p-8 text-center">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{member.name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                                        "{member.quote}"
                                    </p>

                                    <div className="flex justify-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <motion.a whileHover={{ y: -3, color: "#2D5A27" }} href="#" className="text-slate-400">
                                            <Linkedin size={20} />
                                        </motion.a>
                                        <motion.a whileHover={{ y: -3, color: "#2D5A27" }} href="#" className="text-slate-400">
                                            <Mail size={20} />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Decorative mesh */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-12 -mt-12" />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
