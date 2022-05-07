import React from "react";

export default function Joke(props) {
    return (
        <article className="joke">
            {props.setup && <h3 className="joke-setup-heading">Setup</h3>}
            <p className="joke-setup">{props.setup}</p>
            <h3 className="joke-punchline-heading">Punchline</h3>
            <p className="joke-setup">{props.punchline}</p>
        </article>
    );
}