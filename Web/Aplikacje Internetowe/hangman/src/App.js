import { useEffect, useState } from "react";
import LetterSet from "./components/LetterSet";
import wisielec1 from "./images/wisielec1.png";
import wisielec2 from "./images/wisielec2.png";
import wisielec3 from "./images/wisielec3.png";
import wisielec4 from "./images/wisielec4.png";
import wisielec5 from "./images/wisielec5.png";
import wisielec6 from "./images/wisielec6.png";
import wisielec7 from "./images/wisielec7.png";
import wisielec8 from "./images/wisielec8.png";
import wisielec9 from "./images/wisielec9.png";
import wisielec10 from "./images/wisielec10.png";

const words = ["kfc", "lody truskawkowe", "pięć ścian", "koszulka", "noc"];
let guessedWord = words[Math.floor(Math.random() * words.length)];
const hangmanImages = [
    wisielec1,
    wisielec2,
    wisielec3,
    wisielec4,
    wisielec5,
    wisielec6,
    wisielec7,
    wisielec8,
    wisielec9,
    wisielec10,
];

export default function App() {
    const [hangmanStage, setHangmanStage] = useState(1);
    const [userGuess, setUserGuess] = useState("wisielec");
    const [gameStarted, setGameStarted] = useState(false);
    const [timer, setTimer] = useState(0);
    const [points, setPoints] = useState(0);
    useEffect(() => {
        if (hangmanStage === hangmanImages.length) {
            setGameStarted(false);
        }
        if (userGuess === guessedWord) {
            setGameStarted(false);
        }
    }, [hangmanStage, userGuess]);
    function startGame() {
        setPoints(0);
        setTimer(0);
        clearInterval(timerInterval);
        setHangmanStage(1);
        const letterButtons = document.getElementsByClassName("letter-button");
        for (let i = 0; i < letterButtons.length; i++) {
            letterButtons[i].classList.remove("correct");
            letterButtons[i].classList.remove("incorrect");
        }
        guessedWord = words[Math.floor(Math.random() * words.length)];
        words.filter((word) => word === guessedWord);
        setUserGuess(
            [...guessedWord]
                .map((letter) => (letter === " " ? " " : "_"))
                .join("")
        );
        setGameStarted(true);
    }
    let timerInterval;
    useEffect(() => {
        if (gameStarted) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            return () => clearInterval(timerInterval);
        } else {
            clearInterval(timerInterval);
        }
    }, [gameStarted]);
    if (timer === 10) {
        setTimer(0);
        clearInterval(timerInterval);
        setHangmanStage((prevHangmanStage) => prevHangmanStage + 1);
    }
    function guessLetter(event) {
        const letter = event.target.value;
        if (!guessedWord.includes(letter)) {
            setHangmanStage((prevHangmanStage) => prevHangmanStage + 1);
            event.target.classList.add("incorrect");
        } else {
            setTimer(0);
            setPoints((prevPoints) => prevPoints + 1);
            clearInterval(timerInterval);
            setUserGuess((prevUserGuess) => {
                let newUserGuess = "";
                [...guessedWord].forEach(
                    (guessedWordLetter, index) =>
                        (newUserGuess +=
                            guessedWordLetter === letter
                                ? letter
                                : prevUserGuess[index])
                );
                return newUserGuess;
            });
            event.target.classList.add("correct");
        }
        event.target.disabled = true;
    }

    return (
        <div className="app">
            <h2 className="guessed-word">
                punkty: {points}, {userGuess}, czas: {timer}
            </h2>
            <div className="img-set-container">
                <img
                    src={hangmanImages[hangmanStage - 1]}
                    alt="hangman"
                    className="hangman-img"
                />
                <LetterSet
                    handleGuessLetter={guessLetter}
                    gameStarted={gameStarted}
                />
            </div>
            <button className="start-button" onClick={startGame}>
                start
            </button>
            <div
                className="endgame-screen"
                style={{
                    bottom:
                        hangmanStage === hangmanImages.length ||
                        guessedWord === userGuess
                            ? "10em"
                            : "-20em",
                    backgroundColor:
                        guessedWord === userGuess ? "#227150" : "#852e2e",
                }}
            >
                {hangmanStage === hangmanImages.length && (
                    <h2>Gratulacje! Przegrałeś grę!</h2>
                )}
                {guessedWord === userGuess && (
                    <h2>Gratulacje! Wygrałeś grę!</h2>
                )}
            </div>
        </div>
    );
}
