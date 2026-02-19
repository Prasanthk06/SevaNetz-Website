"use client";
import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -10 }}
            className={`glass p-8 rounded-4xl shadow-xl transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
}
