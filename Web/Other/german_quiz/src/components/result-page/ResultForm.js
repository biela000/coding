import { useContext, useState } from "react";
import { useForm } from "@formspree/react";

export default function ResultForm(props) {
    const answers = useContext(props.answerContext);
    const [state, handleSubmit] = useForm("xwkyaakl", {
        data: {
            answers: answers,
            result: props.result,
        },
    });
    const [formElements, setFormElements] = useState({
        firstName: "",
        lastName: "",
    });
    if (state.succeeded) {
        return <h2 className="successful-send">Przesłano wyniki</h2>;
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormElements((prevFormElements) => {
            return {
                ...prevFormElements,
                [name]: value,
            };
        });
    }
    // const word = "oto";
    // if (word === [...word].reverse().join("")) console.log("palindrom");
    // const indexes = [];
    // const osoby = ["Dawid", "Dawid", "Dawid", "Dawid", "Dawid"];
    // for (let i = 0; i < osoby.length; i++) {
    //     if (osoby[i] === "Dawid") indexes.push(i);
    // }
    // console.log("Dawid został odnaleziony na miejscach: " + indexes);
    return (
        <form className="result-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formElements.firstName}
                placeholder="Imię"
                required={true}
            />
            <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formElements.lastName}
                placeholder="Nazdwisko"
                required={true}
            />
            <button type="submit" disabled={state.submitting}>
                Prześlij
            </button>
        </form>
    );
}
