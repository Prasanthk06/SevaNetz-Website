"use client";
import { motion } from "framer-motion";

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {
    const variants = {
        primary: "bg-primary text-white hover:bg-opacity-90",
        secondary: "bg-secondary text-white hover:bg-opacity-90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-soft-green",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}
