import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import CartDishList from "./CartDishList";
import styles from "./CartModal.module.css";
import OrderedContext from "../../contexts/ordered-context";

const CartModal = (props) => {
    const cartCtx = useContext(OrderedContext);
    const summaryPrice = cartCtx.cartDishList
        .map((cartDish) => cartDish.amount * cartDish.price)
        .reduce((ps, a) => ps + a, 0);
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div
                    className={styles.fallback}
                    onClick={props.onFallbackClick}
                ></div>,
                document.getElementById("fallback-root")
            )}
            {ReactDOM.createPortal(
                <Card className={styles.modal}>
                    <CartDishList />
                    <div className={styles["modal--summary"]}>
                        <div>Total Amount</div>
                        <div>{summaryPrice.toFixed(2)}</div>
                    </div>
                    <div className={styles["modal--buttons"]}>
                        <Button
                            className={styles["modal--close"]}
                            onClick={props.onFallbackClick}
                        >
                            Close
                        </Button>
                        <Button
                            className={styles["modal--order"]}
                            onClick={props.onFallbackClick}
                            disabled={cartCtx.summaryAmount === 0}
                        >
                            Order
                        </Button>
                    </div>
                </Card>,
                document.getElementById("modal-root")
            )}
        </React.Fragment>
    );
};

export default CartModal;
