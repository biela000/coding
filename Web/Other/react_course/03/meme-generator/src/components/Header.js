import React from "react";
import trollFaceLogo from "../images/logo.png";

export default function Header() {
    return (
        <header className="meme-generator-header">
            <img
                src={trollFaceLogo}
                alt="Troll Face"
                className="header-logo"
            />
            <h1 className="meme-generator-major-heading">Meme Generator</h1>
            <h2 className="meme-generator-minor-heading">React Course - Project 3</h2>
        </header>
    );
}