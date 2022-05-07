import React from "react";
import largeReactLogo from "../large-logo.png";

export default function Main() {
    return (
        <main className="content-main">
            <div className="wrapper content-main-wrapper">
                <img
                    src={ largeReactLogo }
                    alt="Large React logo."
                    className="main-logo"
                />
                <h2 className="main-major-heading">Fun facts about React</h2>
                <ul className="main-funfact-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </main>
    );
}