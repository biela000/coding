import Button from "../../UI/Button/Button";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import OrderedContext from "../../contexts/ordered-context";
import React, { useContext, useState } from "react";
import CartModal from "./CartModal";

const Cart = () => {
    const cartCtx = useContext(OrderedContext);
    const [isCartClicked, setIsCartClicked] = useState(false);
    const showModalHandler = () => {
        document.body.classList.toggle("scroll-off");
        setIsCartClicked((prevIsCartClicked) => !prevIsCartClicked);
    };
    return (
        <React.Fragment>
            <Button className={styles.cart} onClick={showModalHandler}>
                <FontAwesomeIcon icon={faCartShopping} />
                <h4>Your Cart</h4>
                <div className={styles["cart--count"]}>
                    {cartCtx.summaryAmount}
                </div>
            </Button>
            {isCartClicked && <CartModal onFallbackClick={showModalHandler} />}
        </React.Fragment>
    );
};

export default Cart;
