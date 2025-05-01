import Link from "next/link";
import "./header.css"; // eigene CSS-Datei einbinden

export default function Header() {
    return (
        <header className="custom-header">
            <div className="button-container">
                <Link href="/FAQ">
                    <button className="faq-button">
                        Ask a Question?
                    </button>
                </Link>
                <Link href="/login">
                    <button className="login-button">
                        Login
                    </button>
                </Link>
            </div>
        </header>
    );
}
