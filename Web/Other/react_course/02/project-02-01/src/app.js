import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";

export default function App() {
    const cards = data.map(card => {
        return (
            <Card
                key={card.id}
                {...card}
            />
        );
    });
    return (
        <div className="wrapper root-wrapper">
            <Navbar />
            <Hero />
            <section className="cards">
                {cards}
            </section>
        </div>
    );
}