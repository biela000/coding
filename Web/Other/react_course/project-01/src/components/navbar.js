import React from "react";
import reactLogo from "../logo192.png";

export default function Navbar() {
    return (
        <nav className="header-nav">
            <div className="wrapper header-nav-wrapper">
                <img
                    src={ reactLogo }
                    alt="React logo."
                    className="nav-logo"
                />
                <h1 className="nav-major-heading">ReactFacts</h1>
                <h2 className="nav-minor-heading">React Course - Project 01</h2>
            </div>
        </nav>
    );
}