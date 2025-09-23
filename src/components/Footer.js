import React from 'react';
import { Link } from 'react-router-dom';
import { CodeXml, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-about">
                    <Link to="/" className="logo">
                        <CodeXml />
                        <span>AV Technology</span>
                    </Link>
                    <p>Empowering businesses with cutting-edge technology solutions.</p>
                    <div className="social-links">
                        <a href="#"><Linkedin /></a>
                        <a href="#"><Twitter /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><Link to="/services">Web Development</Link></li>
                        <li><Link to="/services">Mobile Apps</Link></li>
                        <li><Link to="/services">Cloud Solutions</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p><Mail size={16} /> info@avtechnology.com</p>
                    <p><Phone size={16} /> +1 (555) 123-4567</p>
                    <p><MapPin size={16} /> 123 Tech Street, Digital City</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 AV Technology. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;