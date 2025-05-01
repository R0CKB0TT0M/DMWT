import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-600 py-4">
            <div className="container mx-auto flex justify-end space-x-4">
                <Link href="/FAQ">
                    <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                        Ask a Question?
                    </button>
                </Link>
                <Link href="/login">
                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-gray-200 transition">
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
}
