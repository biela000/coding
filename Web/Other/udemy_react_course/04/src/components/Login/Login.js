import { useState, useReducer, useContext, useRef, useEffect } from "react";
import AuthContext from "../context/auth-context";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./Login.module.css";
//NOTE: Z uwagi na to że chciałem tu pokazać useReducer to są niepotrzebne states

const Login = () => {
    const defaultFormValues = {
        emailAddress: "",
        password: "",
    };
    const authCtx = useContext(AuthContext);
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
        authCtx.onLogin(formValues);
        setFormValues(defaultFormValues);
        dispatchFormState({ name: "emailAddress", value: "" });
        dispatchFormState({ name: "password", value: "" });
    };
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    useEffect(() => {
        emailInputRef.current.focus();
    }, []);
    return (
        <Card className={styles.login}>
            <form className={styles["login-form"]} onSubmit={submitHandler}>
                <div className={styles["login-form--inputs"]}>
                    <Input
                        ref={emailInputRef}
                        type="email"
                        name="emailAddress"
                        id="email-input"
                        label="E-Mail"
                        value={formState.emailAddress}
                        onChange={changeHandler}
                    />
                    <Input
                        ref={passwordInputRef}
                        type="password"
                        name="password"
                        id="password-input"
                        label="Password"
                        value={formState.password}
                        onChange={changeHandler}
                    />
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
