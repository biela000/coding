import { useState } from "react";
import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
    const defaultFormValues = {
        username: "",
        age: "",
    };
    const [formValues, setFormValues] = useState(defaultFormValues);
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => {
            return {
                ...prevFormValues,
                [name]: value,
            };
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit({ username: formValues.username, age: +formValues.age });
        setFormValues(defaultFormValues);
    };
    return (
        <form className={styles["new-user-form"]} onSubmit={submitHandler}>
            <div className={styles["new-user-form--inputs"]}>
                <div className={styles["new-user-form--input"]}>
                    <label htmlFor="username-input">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username-input"
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles["new-user-form--input"]}>
                    <label htmlFor="age-input">Age (Years)</label>
                    <input
                        type="text"
                        name="age"
                        id="age-input"
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <button type="submit">Add User</button>
        </form>
    );
};

export default NewUserForm;
