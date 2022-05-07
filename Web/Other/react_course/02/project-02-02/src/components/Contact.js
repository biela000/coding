import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact({ img, name, phone, email }) {
    return (
        <article className="contact-card">
            <img
                src={ img }
                alt="Kitten"
                className="contact-photo"
            />
            <h3 className="contact-name">{ name }</h3>
            <p className="contact-phonenumber">
                <FontAwesomeIcon
                    icon={ faPhone }
                    className="faicon"
                />
                { phone }
            </p>
            <p className="contact-email">
                <FontAwesomeIcon
                    icon={ faEnvelope }
                    className="faicon"    
                />
                { email }
            </p>
        </article>
    );
}