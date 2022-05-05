import React from "react";
import profilePicture from "../images/profile-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
    return (
        <section className="info">
            <div className="wrapper info-wrapper">
                <img 
                    src={ profilePicture }
                    alt="Profile"
                    className="profile-picture"
                />
                <h1 className="info-devname">Piotr Kowalski</h1>
                <h2 className="info-devtype">Frontend Developer</h2>
                <h3 className="info-devlink">piotrkowalski.website</h3>
                <div className="info-buttons-container">
                    <button className="info-email-button">
                        <FontAwesomeIcon icon={ faEnvelope } className="faicon" />
                        Email
                    </button>
                    <button className="info-linkedin-button">
                        <FontAwesomeIcon icon={ faLinkedin } className="faicon" />
                        LinkedIn
                    </button>
                </div>
            </div>
        </section>
    );
}