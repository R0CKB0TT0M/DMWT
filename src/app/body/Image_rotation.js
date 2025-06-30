'use client'; // Markiert die Komponente als Client-Komponente

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importiert Framer Motion für Animationen

const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
];

export default function ScrollImageViewer() {
    const [index, setIndex] = useState(0); // Speichert den aktuellen Bildindex

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault(); // Verhindert das Standardscrollverhalten

            setIndex((prev) => {
                const next = e.deltaY > 0 ? prev + 1 : prev - 1; // Erhöht oder verringert den Index je nach Scrollrichtung
                return Math.max(0, Math.min(images.length - 1, next)); // Begrenzung des Index auf gültigen Bereich
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false }); // Registriert das Mausrad-Event
        return () => window.removeEventListener('wheel', handleWheel); // Entfernt das Event beim Demontieren der Komponente
    }, []);

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="w-full max-w-[600px] aspect-[16/9]">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[index]} // Triggert Animation bei Bildwechsel
                        src={images[index]} // Bildquelle
                        alt={`Bild ${index + 1}`} // Alternativtext

                        initial={{ opacity: 0, scale: 0.95 }} // Startzustand der Animation
                        animate={{ opacity: 1, scale: 1 }} // Zielzustand der Animation
                        exit={{ opacity: 0, scale: 1.05 }} // Zustand beim Verlassen
                        transition={{ duration: 0.5 }} // Dauer der Animation

                        className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}
