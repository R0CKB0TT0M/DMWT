"use client";

import { useScrollIndex } from "./ScrollContext";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/0600.jpg", "/images/1200.jpg", "/images/1800.jpg"];

export default function LeftImage() {
    const { index } = useScrollIndex();

    return (
        <div className="w-full h-auto">
            <AnimatePresence mode="wait">
                {index < 3 && (
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        alt="Left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-auto rounded-xl"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
