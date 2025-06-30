"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

// Kontext erstellen
const ScrollContext = createContext();

// Hook zur Nutzung des Kontexts
export function useScrollIndex() {
    return useContext(ScrollContext);
}

// Provider-Komponente
export function ScrollProvider({ children }) {
    const [index, setIndex] = useState(0);
    const maxIndex = 4; // maximale Anzahl an Abschnitten
    const lastScrollTimeRef = useRef(0); // Zeit des letzten Scroll-Events
    const scrollCooldown = 800; // Zeit in ms zwischen Scrolls (verlangsamt das Scrollen)

    useEffect(() => {
        const handleWheel = (e) => {
            const now = Date.now();

            // Wenn seit dem letzten Scroll weniger als `scrollCooldown` ms vergangen sind, tue nichts
            if (now - lastScrollTimeRef.current < scrollCooldown) return;

            // Zeit des letzten Scrolls aktualisieren
            lastScrollTimeRef.current = now;

            // Nach unten scrollen
            if (e.deltaY > 0) {
                setIndex((prev) => Math.min(prev + 1, maxIndex));
            }

            // Nach oben scrollen
            else if (e.deltaY < 0) {
                setIndex((prev) => Math.max(prev - 1, 0));
            }
        };

        // Scroll-Event registrieren
        window.addEventListener("wheel", handleWheel);

        // Beim Verlassen aufräumen
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ index }}>
            {children}
        </ScrollContext.Provider>
    );
}
