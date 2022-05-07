import React from "react";

export default function Card(props) {
    // const nums = [1, 2, 3, 4, 5]
    // console.log(nums.map(num => Math.pow(num, 2)));
    // const names = ["alice", "bob", "charlie", "danielle"];
    // console.log(names.map(name => name[0].toUpperCase() + name.substring(1, name.length)));
    // const pokemons = ["Bulbasaur", "Charmander", "Squirtle"];
    // console.log(pokemons.map(pokemon => `<p>${pokemon}</p>`));
    let badgeText = !props.openSpots ? "SOLD OUT" : props.location === "Online" ? "ONLINE" : "";
    return (
        <article className="card">
            {badgeText && <span className="spot-state">{badgeText}</span>}
            <img
                src={`../images/${props.coverImg}`}
                alt="Card creator"
                className="card-photo"
            />
            <h4 className="card-review-country">★ {props.stats.rating.toFixed(1)} <span className="card-country-subsection">({props.stats.reviewCount}) • {props.location}</span></h4>
            <h5 className="card-description">{props.title}</h5>
            <p className="card-price"><b>From ${props.price}</b> / person</p>
        </article>
    );
}