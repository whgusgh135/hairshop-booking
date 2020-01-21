import React from "react";

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar__container">
                <ul className="navbar__links-section">
                    <li className="navbar__link">Home</li>
                    <li className="navbar__link">About</li>
                    <li className="navbar__link">Book Online</li>
                    <li className="navbar__link">Our Products</li>
                    <li className="navbar__link">Our Services</li>
                    <li className="navbar__link">Contact Us</li>
                </ul>
            </nav>
        )
    }
}