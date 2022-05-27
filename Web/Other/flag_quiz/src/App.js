import { useState, useEffect } from "react";
import Map from "./components/Map";
import GuessArea from "./components/GuessArea";
import { getByDisplayValue } from "@testing-library/react";

const mapUrl =
    "https://raw.githubusercontent.com/biela000/coding/main/Web/Other/country-db.json";

export default function App() {
    function shuffle(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i !== 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            [shuffledArray[i], shuffledArray[randomIndex]] = [
                shuffledArray[randomIndex],
                shuffledArray[i],
            ];
        }
        return shuffledArray;
    }
    async function fetchGeography() {
        const res = await fetch(mapUrl);
        const data = await res.json();
        return data;
    }
    const [guessedCountries, setGuessedCountries] = useState([]);
    useEffect(() => {
        fetchGeography().then((res) =>
            setGuessedCountries(
                res.objects.ne_110m_admin_0_countries.geometries
            )
        );
    }, []);
    const [guessInputInfo, setGuessInputInfo] = useState({
        countryName: "",
        countryCapital: "",
        clickedCountry: "",
    });
    function handleClickedCountryChange(countryName) {
        setGuessInputInfo((prevGuessInputInfo) => {
            return {
                ...prevGuessInputInfo,
                clickedCountry: countryName,
            };
        });
    }
    function handleGuessInputInfoChange(event) {
        const { name, value } = event.target;
        setGuessInputInfo((prevGuessInputInfo) => {
            return {
                ...prevGuessInputInfo,
                [name]: value,
            };
        });
    }
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [points, setPoints] = useState(0);
    const [currentGuessedCountryIndex, setCurrentGuessedCountryIndex] =
        useState(0);
    function startGame(event) {
        setIsGameStarted(true);
        setGuessedCountries((prevGuessedCountries) =>
            shuffle(prevGuessedCountries)
        );
        event.target.disabled = true;
    }
    useEffect(() => {
        if (guessedCountries.length > 0) {
            const countryProps =
                guessedCountries[currentGuessedCountryIndex].properties;
            if (
                guessInputInfo.countryName === countryProps.NAME &&
                guessInputInfo.countryCapital === countryProps.CAPITAL &&
                guessInputInfo.clickedCountry === countryProps.NAME
            ) {
                setCurrentGuessedCountryIndex(
                    (prevCurrentGuessedCountryIndex) =>
                        prevCurrentGuessedCountryIndex + 1
                );
                setGuessInputInfo({
                    countryName: "",
                    countryCapital: "",
                    clickedCountry: "",
                });
                setPoints((prevPoints) => prevPoints + 1);
            }
        }
    }, [guessInputInfo]);
    return (
        <div className="app">
            <h2>{points}</h2>
            <Map geoUrl={mapUrl} handleClick={handleClickedCountryChange} />
            <GuessArea
                guessAreaInputInfo={guessInputInfo}
                handleChange={handleGuessInputInfoChange}
                currentCountryCode={
                    guessedCountries.length > 0
                        ? guessedCountries[currentGuessedCountryIndex]
                              .properties.ISO_A2
                        : "af"
                }
                startGame={startGame}
                isGameStarted={isGameStarted}
            />
        </div>
    );
}
