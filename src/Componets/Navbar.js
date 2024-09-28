import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../images/start.jpeg";
import "./Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="logo-container">
                    <Link to="/" className="link">
                        <img alt="logo" src={img} className="gather-logo" />
                    </Link>
                </div>

                {/* Menu options */}
                <ul className={`navbar-options-container ${isMenuOpen ? "open" : ""}`}>
                    <a href="#who-we-are" className="link">
                        <li>WHO WE ARE</li>
                    </a>
                    <a href="#projects" className="link">
                        <li>Projects</li>
                    </a>
                    <a href="#whatwedo" className="link">
                    <li>What we do</li>
                    </a>
                    <a href="#whos-talking" className="link">
                        <li>Who's talking</li>
                    </a>
                  
                    <a href="#contact" className="link">
                        <li>Contact Us</li>
                    </a>
                </ul>

                {/* Hamburger icon */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
