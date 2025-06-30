"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");

    

    const AddSubscription = async (subscription) => {
    try {
      const response = await fetch('/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),  // Send the new comment in the request body
      });if (!response.ok) {
        throw new Error("Failed to add subscription");
      }

      console.log("Subscription successful:", subscription);
    } catch (error) {
      console.error("Error adding subscription:", error);
    }
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        AddSubscription(email)
        console.log("Newsletter angemeldet:", email);
        setEmail("");


    };

    return (
        <motion.div
            className="newsletter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                maxWidth: "500px",
                margin: "80px auto",
                padding: "2rem",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#e0e0e0", // grauer Hintergrund
                color: "#000000", // schwarze Schrift
                fontFamily: "sans-serif",
            }}
        >
            <h2 style={{ marginBottom: "1rem" }}>Newsletter abonnieren</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-Mail-Adresse"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        padding: "0.5rem",
                        fontSize: "1rem",
                        width: "70%",
                        marginBottom: "1rem",
                        border: "1px solid #999",
                        borderRadius: "4px",
                        backgroundColor: "#fff",
                        color: "#000",
                    }}
                />
                <br />
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1.5rem",
                        fontSize: "1rem",
                        cursor: "pointer",
                        backgroundColor: "#000",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    Anmelden
                </button>
            </form>
        </motion.div>
    );
}
