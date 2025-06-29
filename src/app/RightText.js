"use client";

import { useScrollIndex } from "./ScrollContext";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
    [
        "Ella hat Diabetes. Da sie aber\n weiß, wie sie damit umgehen soll",
        "ist das für sie kein Problem mehr. Früher war das anders.",
        "Sie hatte damals sehr große Probleme eine richtige Ernährung",
        "zu finden und ihr Blutzuckerspiegel spielte verrückt."

    ],
    [
        "Es war schwierig für sie eine ausgewogene Ernährung zu finden",
        "und ihren Kopf frei zu bekommen. Immerwieder kamen Gedanken, ob",
        "alle in Ordnung ist und ob sie zu Ausflügen ihrer Freunde mitgehen",
        "kann oder ob ihr das Risiko nicht doch zu hoch ist."
    ],
    [
        "Heute ist das anderes. Sie bekommt regelmäßig neue, gesund und",
        "interessante Rezepte, die sie gerne nachkocht. ",
        "Seit dem fühlt sie sich nicht mehr anders und hat auch",
        "keine Angst mehr sie selbst zu sein. ",
        "Melde dich an und fühle auch du dich besser!"
    ],
];

export default function RightText() {
    const { index } = useScrollIndex();

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-xl font-semibold mb-2">{texts[index][0]}</h2>

            {texts[index].slice(1).map((paragraph, i) => (
                <h2 key={i} className="mb-4 whitespace-normal">
                    {paragraph}
                </h2>
            ))}
        </motion.div>
    );
}
