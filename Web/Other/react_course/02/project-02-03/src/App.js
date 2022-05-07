import React from "react";
import Joke from "./components/Joke";
import jokesData from "./jokes-data";

export default function App() {
    const jokes = jokesData.map(jk => <Joke setup={jk.setup} punchline={jk.punchline} />);
    return (
        <div className="jokes">
            {jokes}
        </div>
    );
}