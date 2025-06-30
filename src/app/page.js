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
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
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
