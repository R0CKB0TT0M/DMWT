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
                <div className="grid grid-cols-5 gap-4 h-full p-8 pt-24 place-items-center min-h-screen bg-[#78FFCD]">
                    <LeftImage />
                    <div className="col-span-2 w-full">
                    <CenterImage />
                    </div>
                    <div className="col-span-2 w-full">
                    <RightText />
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 h-full p-8 pt-24 place-items-center min-h-screen bg-[#78FFCD]">
               <Footer />
               </div>

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
