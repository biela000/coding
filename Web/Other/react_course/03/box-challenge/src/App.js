import { useState } from "react";
import Box from "./components/Box";
import boxesData from "./boxes";

// Not working challenge because something is different about writing code in scrimba and on your local machine idk

export default function App() {
    function toggle(id) {
        setBoxes(prevBoxes => prevBoxes.map(prevBox => prevBox.id === id ? {...prevBox, on: !prevBox.on} : prevBox));
    }
    const [boxes, setBoxes] = useState(boxesData);
    const boxElements = boxes.map(box => {
        return (
            <Box
                key={box.id}
                id={box.id}
                on={box.on}
                handleClick={toggle}
            />
        );
    });
    return (
        <main>
            {boxElements}
        </main>
    );
}