"use client";

import { useScrollIndex } from "./ScrollContext";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/images/breakfast.jpg", "/images/lunch.jpg", "/images/dinner.jpg"];

export default function CenterImage() {
    const { index } = useScrollIndex();

    return (
        <div className="w-full h-auto">
            <AnimatePresence mode="wait">
                {index < 3 && (
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        alt="Center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-[30%] h-auto object-cover rounded-xl"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
