"use client";
import { ScrollProvider } from "./ScrollContext";
import LeftImage from "./LeftImage";
import CenterImage from "./CenterImage";
import RightText from "./RightText";
import Header from "./body/header/page.js";
import Footer from "./Footer";
import { useScrollIndex } from "./ScrollContext";

function MainContent() {
    const { index } = useScrollIndex();

    return (
        <div className="relative h-full">
            <Header />
            {index < 3 ? (
                <div className="grid grid-cols-3 gap-4 h-full p-8 pt-24 items-center">
                    <LeftImage />
                    <CenterImage />
                    <RightText />
                </div>
            ) : (
               <Footer />

            )
            }
        </div>
    );
}

export default function Page() {
    return (
        <ScrollProvider>
            <MainContent />
        </ScrollProvider>
    );
}
