import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            <img
                src="./images/grid-panel.png"
                alt="Panel containing various photos of people and actions e. g. cooking"
                className="photo-grid"
            />
            <h2 className="major-hero-heading">Online Experiences</h2>
            <h3 className="hero-subheading">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</h3>
        </section>
    );
}