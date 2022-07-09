import { useState } from "react";
// import styled from "styled-components";
import Button from "../UI/Button";
import styles from "./NewGoalForm.module.css";

// const FormControl = styled.div`
//     & > label {
//         display: block;
//         font-size: 1.4em;
//         font-weight: 700;
//         color: ${(props) => (props.invalid ? "var(--color4)" : "#000000")};
//     }

//     & > input {
//         width: 100%;
//         border: 1px solid
//             ${(props) => (props.invalid ? "var(--color4)" : "#c0bfbf")};
//         padding: 5px 10px;
//         font-size: 1.25em;
//         outline: none;
//         margin-top: 10px;
//         background-color: ${(props) =>
//             props.invalid ? "salmon" : "transparent"};
//     }

//     & > button[type="submit"] {
//         background-color: var(--color2);
//         border: none;
//         padding: 10px 30px;
//         font-size: 1.25em;
//         color: var(--color1);
//         cursor: pointer;
//         margin-top: 10px;
//     }

//     @media screen and (max-width: 768px) {
//         width: auto;
//     }
// `;

const NewGoalForm = (props) => {
    const [goalName, setGoalName] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);
    const changeHandler = (event) => {
        const { value } = event.target;
        if (value.trim().length > 0) {
            setIsInputValid(true);
        }
        setGoalName(value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (goalName.trim().length === 0) {
            setIsInputValid(false);
            return;
        }
        props.onSaveCourseGoal(goalName);
        setGoalName("");
    };
    return (
        <form className={styles["new-goal-form"]} onSubmit={submitHandler}>
            {/* <FormControl invalid={!isInputValid}> */}
            <div
                className={`${styles["form-control"]} ${
                    !isInputValid && styles.invalid
                }`}
            >
                <label htmlFor="goal-name-input">Course Goal</label>
                <input
                    type="text"
                    name="goal-name"
                    id="goal-name-input"
                    value={goalName}
                    onChange={changeHandler}
                />
            </div>
            {/* </FormControl> */}
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default NewGoalForm;
