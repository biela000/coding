import React from "react";
import Header from "./components/Header";
import Place from "./components/Place";
import placeData from "./place-data";

export default function App() {
    const places = placeData.map(place => {
        return (
            <Place
                key={place.key}
                {...place}
            />
        );
    });
    return (
        <div className="root-wrapper">
            <Header />
            <section className="places">
                {places}
            </section>
        </div>
    );
}