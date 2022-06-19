export default function LetterButton(props) {
    return (
        <button
            className="letter-button"
            value={props.letter}
            onClick={props.handleGuessLetter}
            disabled={props.isDisabled}
        >
            {props.letter}
        </button>
    );
}
