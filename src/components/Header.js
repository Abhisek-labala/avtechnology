import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CodeXml, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to="/" className="logo">
                        <CodeXml />
                        <span>AV Technology</span>
                    </Link>
                    <nav className="main-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </nav>
                    <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
                        <Menu />
                    </button>
                </div>
            </header>

            <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <button className="close-btn" onClick={() => setIsMenuOpen(false)}><X /></button>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
        </>
    );
};

export default Header;