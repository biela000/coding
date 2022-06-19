import LetterButton from "./LetterButton";

export default function LetterSet(props) {
    const letters = [
        "a",
        "ą",
        "b",
        "c",
        "ć",
        "d",
        "e",
        "ę",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "ł",
        "m",
        "n",
        "ń",
        "o",
        "ó",
        "p",
        "r",
        "s",
        "ś",
        "t",
        "u",
        "w",
        "y",
        "z",
        "ź",
        "ż",
    ];
    const letterSet = letters.map((letter, index) => (
        <LetterButton
            key={index}
            letter={letter}
            handleGuessLetter={props.handleGuessLetter}
            isDisabled={!props.gameStarted}
        />
    ));
    return <div className="letter-set">{letterSet}</div>;
}
