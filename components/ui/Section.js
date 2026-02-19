"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, className = "", id = "" }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const flareX = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={containerRef}
            id={id}
            className={`py-32 md:py-48 relative overflow-hidden px-6 md:px-12 lg:px-24 ${className}`}
        >
            {/* Cinematic Background Mesh */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] will-change-transform"
                />

                {/* Animated Lens Flare Effect - Optimized */}
                <motion.div
                    style={{ x: flareX, opacity }}
                    className="absolute top-0 h-full w-[1px] bg-white/10 blur-sm z-20 pointer-events-none will-change-transform"
                />
                <motion.div
                    style={{ x: flareX, opacity }}
                    className="absolute top-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-[80px] z-20 pointer-events-none will-change-transform"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 150, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
