"use client";
import Link from "next/link";
import "./header.css"; // eigene CSS-Datei einbinden

export default function Header() {
    return (
        <header className="custom-header">
            <div className="button-container">
                <Link href="/recipes">
                    <button className="login-button">
                        Browse Recipes
                    </button>
                </Link>
                <Link href="/FAQ">
                    <button className="faq-button">
                        Ask a Question?
                    </button>
                </Link>
                <Link href="https://dmwt-chi.vercel.app/body/comments">
                    <button className="login-button">
                        Comments
                    </button>
                </Link>
            </div>
        </header>
    );
}
