import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const images = [
    '/images/food_image1.jpg',
    '/images/food_image2.jpg',
    '/images/food_image3.jpg',
    '/images/food_image4.jpg',
];


export default function ScrollImageViewer() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            setIndex((prev) => {
                const next = e.deltaY > 0 ? prev + 1 : prev - 1;
                return Math.max(0, Math.min(images.length - 1, next));
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="relative w-[500px] h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[index]}
                        src={images[index]}
                        alt={`Bild ${index + 1}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}