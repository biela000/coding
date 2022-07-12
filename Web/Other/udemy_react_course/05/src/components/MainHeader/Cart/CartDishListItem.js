import React, { useContext } from "react";
import OrderedContext from "../../contexts/ordered-context";
import Button from "../../UI/Button/Button";
import styles from "./CartDishListItem.module.css";

const CartDishListItem = (props) => {
    const cartCtx = useContext(OrderedContext);
    return (
        <React.Fragment>
            <li className={styles["cart-dish-list-item"]}>
                <div className={styles["cart-dish-list-item--info"]}>
                    <h3 className={styles["cart-dish-list-item--name"]}>
                        {props.dish.name}
                    </h3>
                    <h4 className={styles["cart-dish-list-item--price"]}>
                        ${props.dish.price.toFixed(2)}
                    </h4>
                    <div className={styles["cart-dish-list-item--amount"]}>
                        x {props.dish.amount}
                    </div>
                </div>
                <div className={styles["cart-dish-list-item--actions"]}>
                    <Button
                        className={styles["cart-dish-list-item--remove"]}
                        onClick={() => {
                            cartCtx.manageCart(props.dish, -1);
                        }}
                    >
                        -
                    </Button>
                    <Button
                        className={styles["cart-dish-list-item--add"]}
                        onClick={() => {
                            cartCtx.manageCart(props.dish, 1);
                        }}
                    >
                        +
                    </Button>
                </div>
            </li>
            <hr className={styles["cart-dish-list-item--separator"]}></hr>
        </React.Fragment>
    );
};

export default CartDishListItem;
