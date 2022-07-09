// import styled from "styled-components";
import styles from "./Button.module.css";

// const Button = styled.button`
// background-color: var(--color2);
// border: none;
// padding: 10px 30px;
// font-size: 1.25em;
// color: var(--color1);
// cursor: pointer;
// margin-top: 10px;
// `;

const Button = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={styles.button}
        >
            {props.children}
        </button>
    );
};

export default Button;
