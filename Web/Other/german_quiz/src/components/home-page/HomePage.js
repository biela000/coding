import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from "../../App";

export default function HomePage(props) {
    const [nameInputs, setNameInputs] = useState({
        firstName: "",
        lastName: "",
    });
    const { testInfo, setTestInfo } = useContext(InfoContext);
    function handleChange(event) {
        const { name, value } = event.target;
        setNameInputs((prevNameInputs) => {
            return {
                ...prevNameInputs,
                [name]: value,
            };
        });
    }
    return (
        <div className="home-page">
            <header className="home-page--header">
                <h1 className="home-page--header--heading">
                    <FontAwesomeIcon
                        icon={faLanguage}
                        className="home-page--header--icon"
                    />
                    deutschtest
                </h1>
            </header>
            <main className="home-page--main">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="imię"
                        name="firstName"
                        onChange={handleChange}
                        value={nameInputs.firstName}
                        className="home-page--main-name-input"
                        required={true}
                    />
                    <input
                        type="text"
                        placeholder="nazwisko"
                        name="lastName"
                        onChange={handleChange}
                        value={nameInputs.lastName}
                        className="home-page--main-name-input"
                        required={true}
                    />
                </div>
                <button
                    className="home-page--main--start-button"
                    onClick={() => {
                        const tmp = document.getElementsByClassName(
                            "home-page--main-name-input"
                        );
                        if (!tmp[0].value || !tmp[1].value) {
                            return;
                        }
                        props.handlePageChange(1);
                        setTestInfo((prevTestInfo) => {
                            return {
                                ...prevTestInfo,
                                ...nameInputs,
                            };
                        });
                    }}
                >
                    rozpocznij
                </button>
            </main>
            <footer className="home-page--footer">
                <h3 className="home-page--footer--heading">
                    &copy; biela 2022
                </h3>
            </footer>
        </div>
    );
}
