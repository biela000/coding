import { useState } from "react";
import bingoBlockData from "./bingo-block-data";
import BingoBlock from "./components/BingoBlock";
import UserBingoContext from "./UserBingoContext";

export default function App() {
    const bingoBlocks = bingoBlockData.map((blockText, index) => (
        <BingoBlock key={index} text={blockText} />
    ));
    const [userBingo, setUserBingo] = useState({});
    return (
        <div className="app">
            <UserBingoContext.Provider value={{ userBingo, setUserBingo }}>
                <div className="bingo-blocks">{bingoBlocks}</div>
            </UserBingoContext.Provider>
        </div>
    );
}
