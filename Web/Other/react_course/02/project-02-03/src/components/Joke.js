import { useState } from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = useState(false);
    function clickHandler() {
        setIsShown(prevIsShown => !prevIsShown);
    }
    return (
        <article className="joke">
            {props.setup && <h3 className="joke-setup-heading">Setup</h3>}
            <p className="joke-setup">{props.setup}</p>
            {isShown && <h3 className="joke-punchline-heading">Punchline</h3>}
            {isShown && <p className="joke-setup">{props.punchline}</p>}
            {/* <button className="joke-isshown-button" onClick={clickHandler}>{(!isShown && "Show punchline") || "Hide punchline"}</button> */}
            <button className="joke-isshown-button" onClick={clickHandler}>{isShown ? "Hide" : "Show"} punchline</button>
        </article>
    );
}