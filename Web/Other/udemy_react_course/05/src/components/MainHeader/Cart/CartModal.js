import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import CartDishList from "./CartDishList";
import styles from "./CartModal.module.css";
import OrderedContext from "../../contexts/ordered-context";

const CartModal = () => {
    const cartCtx = useContext(OrderedContext);
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <div className={styles.fallback}></div>,
                document.getElementById("fallback-root")
            )}
            {ReactDOM.createPortal(
                <Card className={styles.modal}>
                    <CartDishList />
                    <div className={styles["modal--summary"]}>
                        <div>Total Amount</div>
                        <div>{cartCtx.summaryPrice}</div>
                    </div>
                    <div className={styles["modal--buttons"]}>
                        <Button className={styles["modal--close"]}>
                            Close
                        </Button>
                        <Button className={styles["modal--order"]}>
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
