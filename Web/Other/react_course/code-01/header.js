import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="nav-items-container">
                <img src="./react-logo.png" className="nav-image" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
