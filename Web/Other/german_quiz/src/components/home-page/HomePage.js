import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function HomePage(props) {
    return (
        <div className="home-page">
            <header className="home-page--header">
                <h1 className="home-page--header--heading">
                    <FontAwesomeIcon icon={faLanguage} className="home-page--header--icon" />
                    deutschtest
                </h1>
            </header>
            <main className="home-page--main">
                <button
                    className="home-page--main--start-button"
                    onClick={() => props.handlePageChange(1)}
                >
                    rozpocznij
                </button>
            </main>
            <footer className="home-page--footer">
                <h3 className="home-page--footer--heading">&copy; biela 2022</h3>
            </footer>
        </div>
    );
}