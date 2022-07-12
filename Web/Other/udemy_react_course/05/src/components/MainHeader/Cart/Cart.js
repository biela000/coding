import Button from "../../UI/Button/Button";
import styles from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import OrderedContext from "../../contexts/ordered-context";
import { useContext, useState } from "react";
import CartModal from "./CartModal";

const Cart = () => {
    const cartCtx = useContext(OrderedContext);
    const [isCartClicked, setIsCartClicked] = useState(false);
    const showModalHandler = () => {
        setIsCartClicked(true);
    };
    return (
        <Button className={styles.cart} onClick={showModalHandler}>
            <FontAwesomeIcon icon={faCartShopping} />
            <h4>Your Cart</h4>
            <div className={styles["cart--count"]}>{cartCtx.summaryAmount}</div>
            {isCartClicked && <CartModal />}
        </Button>
    );
};

export default Cart;
