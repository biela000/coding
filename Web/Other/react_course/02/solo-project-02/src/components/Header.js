import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header className="site-header">
            <h1 className="site-heading">
                <FontAwesomeIcon
                    icon={faEarthAmericas}
                    className="site-header-faicon"
                />
                my travel journal.
            </h1>
        </header>
    );
}