"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [index, setIndex] = useState(0);
    const maxIndex = 3; // anpassen, wenn du mehr Inhalte hast

    // Wischen (Touch)
    let touchStartY = 0;

    useEffect(() => {
        const handleWheel = (e) => {
            if (e.deltaY > 0) {
                setIndex((prev) => Math.min(prev + 1, maxIndex));
            } else {
                setIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === "ArrowDown") {
                setIndex((prev) => Math.min(prev + 1, maxIndex));
            } else if (e.key === "ArrowUp") {
                setIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            if (diff > 30) {
                // nach oben gewischt → runter scrollen
                setIndex((prev) => Math.min(prev + 1, maxIndex));
            } else if (diff < -30) {
                // nach unten gewischt → hoch scrollen
                setIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        window.addEventListener("wheel", handleWheel);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ index }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollIndex = () => useContext(ScrollContext);
