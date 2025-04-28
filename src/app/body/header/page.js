import Link from "next/link";

export default function Header() {
    return (
        // rechtsbündig, vertikal, blau, schrift weiß, Abstand 4
        <header className="align= right flex justify-end items-center bg-blue-600 text-white p-8">
            <div className="flex space-x-8">
                {/*Button 1*/}
                <Link href="/FAQ">
                    {/*hintergrund grün, weißer text, abstand, button abgerundet, grauer hintergrund(beim hover), transition beim Übergang*/}
                    <button className="align=right bg-green text-white py-2 px-4 rounded hover:bg-gray-200 transition">
                        Ask a Question?
                    </button>
                </Link>
                    {/* Button 2*/}
                <Link href="/login">
                    {/*hintergrund blau, weißer text, button abgerundet, grauer hintergrund(beim hover), transition beim Übergang*/}
                    <button className="align=right bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
}
