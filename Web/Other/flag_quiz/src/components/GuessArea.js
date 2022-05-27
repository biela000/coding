import "./css/guess-area.css";

export default function GuessArea(props) {
    return (
        <div className="guess-area">
            <img
                src={`./images/${props.currentCountryCode}.svg`}
                alt="Country flag"
                className="country-flag-img"
            />
            <input
                type="text"
                name="countryName"
                className="guess-area--input"
                onChange={props.handleChange}
                value={props.guessAreaInputInfo.countryName}
                placeholder="nazwa państwa"
                disabled={!props.isGameStarted}
            />
            <input
                type="text"
                name="countryCapital"
                className="guess-area--input"
                onChange={props.handleChange}
                value={props.guessAreaInputInfo.countryCapital}
                placeholder="stolica"
                disabled={!props.isGameStarted}
            />
            <button className="start-button" onClick={props.startGame}>
                start
            </button>
        </div>
    );
}
