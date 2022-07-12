import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            className={`${props.className} ${styles.button}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
