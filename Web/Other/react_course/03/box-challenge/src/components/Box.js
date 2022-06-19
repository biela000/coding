import { useState } from "react";

export default function Box(props) {
    const [isBoxOn, setIsBoxOn] = useState(props.on);
    const boxStyles = {
        backgroundColor: isBoxOn ? "#222222" : "transparent"
    };
    function clickHandler() {
        setIsBoxOn(prevIsBoxOn => !prevIsBoxOn);
    }
    return (
        <div className="box" style={boxStyles} onClick={() => props.handleClick(props.id)}></div>
    );
}