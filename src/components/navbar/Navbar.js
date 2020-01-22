import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <nav className="navbar__container">
                    <div className="navbar__logo-section">
                        <Link to="/" className="navbar__logo">Some logo</Link>
                    </div>
                    <div className="navbar__links-section">
                        <Link to="/" className="navbar__link">Home</Link>
                        <Link to="/about" className="navbar__link">About</Link>
                        <Link to="/book" className="navbar__link">Book Online</Link>
                        <Link to="/products" className="navbar__link">Our Products</Link>
                        <Link to="/services" className="navbar__link">Our Services</Link>
                        <Link to="/contact"className="navbar__link">Contact Us</Link>
                    </div>
                </nav>
            </div>
        )
    }
}