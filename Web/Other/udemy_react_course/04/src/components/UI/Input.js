import React, { useRef, useImperativeHandle } from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const activate = () => {
        inputRef.current.focus();
    };
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        };
    });
    return (
        <div className={styles["input"]}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                ref={inputRef}
            />
        </div>
    );
});

export default Input;
