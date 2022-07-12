import { useContext, useState } from "react";
import Button from "../../UI/Button/Button";
import OrderedContext from "../../contexts/ordered-context";
import styles from "./DishAmount.module.css";

const DishAmount = (props) => {
    const [dishAmount, setDishAmount] = useState(1);
    const changeHandler = (event) => {
        const { value } = event.target;
        setDishAmount(value);
    };
    const cartCtx = useContext(OrderedContext);
    return (
        <div className={styles["dish-amount"]}>
            <div className={styles["dish-amount--input"]}>
                <label htmlFor="amount-input">Amount</label>
                <input
                    type="number"
                    name="amount"
                    id="amount-input"
                    value={dishAmount}
                    onChange={changeHandler}
                    min={1}
                />
            </div>
            <Button
                className={styles["dish-amount--add"]}
                onClick={() => {
                    cartCtx.manageCart(props.dish, +dishAmount);
                }}
            >
                + Add
            </Button>
        </div>
    );
};

export default DishAmount;
