import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Place(props) {
    return (
        <article className="place">
            <img
                src={`../images/${props.img}`}
                alt="Marvelous-looking place"
                className="place-image"
            />
            <section className="place-text-section">
                <header className="place-header">
                    <h3 className="place-details">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="place-faicon"
                        />
                        <span className="place-country">{props.country}</span>
                        <a href={props.mapsLink}>View on Google Maps</a>
                    </h3>
                    <h2 className="place-name">{props.name}</h2>
                </header>
                <h4 className="place-dates">{props.startDate} - {props.endDate}</h4>
                <p className="place-description">{props.description}</p>
            </section>
        </article>
    );
}