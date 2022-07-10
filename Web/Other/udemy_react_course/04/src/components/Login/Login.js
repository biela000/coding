import { useState, useReducer } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Login.module.css";
//NOTE: Z uwagi na to że chciałem tu pokazać useReducer to są niepotrzebne states

const Login = (props) => {
    const defaultFormValues = {
        emailAddress: "",
        password: "",
    };
    const formReducer = (state, action) => {
        return {
            ...state,
            [action.name]: action.value.trim(),
        };
    };
    const [formState, dispatchFormState] = useReducer(
        formReducer,
        defaultFormValues
    );
    const [formValues, setFormValues] = useState(defaultFormValues);
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                [name]: value.trim(),
            };
        });
        dispatchFormState({ name: name, value: value });
    };
    const isInputValid =
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            formValues.emailAddress
        ) && formValues.password.length > 6;
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(formValues);
        setFormValues(defaultFormValues);
        dispatchFormState({ name: "emailAddress", value: "" });
        dispatchFormState({ name: "password", value: "" });
    };
    return (
        <Card className={styles.login}>
            <form className={styles["login-form"]} onSubmit={submitHandler}>
                <div className={styles["login-form--inputs"]}>
                    <div className={styles["login-form--input"]}>
                        <label htmlFor="email-input">E-Mail</label>
                        <input
                            type="email"
                            name="emailAddress"
                            id="email-input"
                            value={formState.emailAddress}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className={styles["login-form--input"]}>
                        <label htmlFor="password-input">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password-input"
                            value={formState.password}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <Button
                    className={styles["login-form--submit"]}
                    type="submit"
                    disabled={!isInputValid}
                >
                    Login
                </Button>
            </form>
        </Card>
    );
};

export default Login;
