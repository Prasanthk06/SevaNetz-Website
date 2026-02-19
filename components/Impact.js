"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Section from "./ui/Section";

function BigCounter({ value, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 40, damping: 20 });
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

export default function Impact() {
    const visions = [
        { value: 50, suffix: "%", label: "Target: Waste Reduction", color: "text-primary" },
        { value: 100, suffix: "M", label: "Projected Meals / Year", color: "text-secondary" },
        { value: 10, suffix: "k", label: "Global Launch Cities", color: "text-primary" }
    ];

    return (
        <Section id="impact" className="bg-soft-orange/30">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The SevaNetz Mission</h2>
                    <p className="text-lg text-foreground/70">
                        We aren't just looking at the now. We are engineering the next decade of sustainable food cycles.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {visions.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <p className={`text-6xl md:text-8xl font-black mb-4 ${item.color}`}>
                                <BigCounter value={item.value} suffix={item.suffix} />
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-foreground/60">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-12 glass rounded-4xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl font-bold mb-6 uppercase tracking-wider">The 2030 Catalyst</h3>
                        <p className="text-xl text-foreground/70 italic">
                            "Our protocol is designed to be the global standard for food redistribution. We are here to prove that with the right data, zero-waste is not just a dream—it's an engineering reality."
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
