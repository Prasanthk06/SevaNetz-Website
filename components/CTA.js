"use client";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function CTA() {
    return (
        <Section className="pb-32">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative bg-primary rounded-[3rem] p-12 md:p-24 overflow-hidden text-center text-white"
            >
                {/* Animated Background Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-green/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Be part of the <span className="text-secondary italic">Prototype.</span>
                    </h2>
                    <p className="text-xl opacity-80 mb-12 text-balance">
                        We are looking for visionary partners to help us shape the first iteration of the SevaNetz protocol.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1AbBNEv-TvGEtml9ZqNOkN4_Nk2gdobeh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="secondary" className="!px-10 !py-4 text-lg flex items-center gap-2">
                                <Download size={20} />
                                Download App
                            </Button>
                        </a>
                        <Button className="glass !bg-white/10 !text-white border-white/20 !px-10 !py-4 text-lg">Inquire for Pilot</Button>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
