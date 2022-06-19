import { useContext } from "react";
import UserBingoContext from "../UserBingoContext";
import "./bingo-block.css";

export default function BingoBlock(props) {
    const { userBingoData, setUserBingoData } = useContext(UserBingoContext);
    function handleClick(event) {
        event.target.classList.add("checked");
    }
    return (
        <div className="bingo-block" onClick={handleClick}>
            {props.text}
        </div>
    );
}
