import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ResultForm(props) {
    const [state, handleSubmit] = useForm("xwkyaakl", {
        answers: props.answers,
        result: props.result
    });
    const [formElements, setFormElements] = useState({
        email: "",
        firstName: "",
        lastName: ""
    });
    console.log(props.answers);
    if (state.succeeded) {
        return <h2>Przesłano wyniki</h2>;
    }
    function handleChange(event) {
        const {name, value} = event.target;
        setFormElements(prevFormElements => {
            return {
                ...prevFormElements,
                [name]: value
            }
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formElements.email}
                placeholder="Adres email"
                required={true}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
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