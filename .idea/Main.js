// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';



function App() {
    const handleAsk = () => alert('Ask a Question clicked!');
    const handleLogin = () => alert('Login clicked!');

    return (
        <div>
            <Header onAskQuestion={handleAsk} onLogin={handleLogin} />
            <HeroSection />
            <MissionSection />
        </div>
    );
}

export default App;


// components/Header.js
import React from 'react';
import './Header.css';

function Header({ onAskQuestion, onLogin }) {
    return (
        <header className="hero-header">
            <div className="header-content">
                <div className="header-logo">DeinLogo</div>
                <div className="header-buttons">
                    <button className="btn login-btn" onClick={onLogin}>
                        Login / Create Account
                    </button>
                    <button className="btn ask-btn" onClick={onAskQuestion}>
                        Ask a Question?
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;


// components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className="hero-section">
            <h1>Lass dich nicht aufhalten!</h1>
            <h2>Ändere jetzt dein Leben!</h2>
            <p>
                Wir helfen dir, einen gesunden und einfachen Lebensstil zu führen
            </p>
            <a href="#" className="cta-link">Erfahre mehr >;</a>
        </section>
    );
}

export default HeroSection;
// components/MissionSection.js
import React from 'react';
import './MissionSection.css';

function MissionSection() {
    return (
        <section className="mission-section">
            <h2>Unsere Mission</h2>
            <p>Hier kannst du Infos über eure Mission ergänzen.</p>
        </section>
    );
}

export default MissionSection;
