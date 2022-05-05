import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <section className="footer">
            <div className="wrapper footer-wrapper">
                <FontAwesomeIcon icon={ faTwitter } />
                <FontAwesomeIcon icon={ faFacebook } />
                <FontAwesomeIcon icon={ faInstagram } />
                <FontAwesomeIcon icon={ faGithub } />
            </div>
        </section>

    );
}