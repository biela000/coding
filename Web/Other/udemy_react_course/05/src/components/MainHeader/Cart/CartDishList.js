import CartDishListItem from "./CartDishListItem";
import styles from "./CartDishList.module.css";
import OrderedContext from "../../contexts/ordered-context";
import { useContext } from "react";

const CartDishList = () => {
    const cartCtx = useContext(OrderedContext);
    const cartDishListElements = cartCtx.cartDishList.map((cartDish) => {
        return <CartDishListItem key={cartDish.id} dish={cartDish} />;
    });
    return <ul className={styles["cart-dish-list"]}>{cartDishListElements}</ul>;
};

export default CartDishList;
