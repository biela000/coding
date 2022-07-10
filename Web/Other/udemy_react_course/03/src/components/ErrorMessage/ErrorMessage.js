import React from "react";
import Card from "../UI/Card";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
    return (
        <React.Fragment>
            <div
                className={styles["error-backdrop"]}
                onClick={props.onBackdropClick}
            ></div>
            <Card className={styles["error-message"]}>
                <div className={styles["error-message--title"]}>
                    {props.errorTitle}
                </div>
                <div className={styles["error-message--content"]}>
                    <p>{props.errorText}</p>
                    <button onClick={props.onBackdropClick}>Okay</button>
                </div>
            </Card>
        </React.Fragment>
    );
};

export default ErrorMessage;
