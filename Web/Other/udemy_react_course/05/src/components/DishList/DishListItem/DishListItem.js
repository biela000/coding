import React from "react";
import DishAmount from "./DishAmount";
import styles from "./DishListItem.module.css";

const DishListItem = (props) => {
    return (
        <React.Fragment>
            <li className={styles["dish-list-item"]}>
                <div className={styles["dish-list-item--info"]}>
                    <h3 className={styles["dish-list-item--name"]}>
                        {props.dish.name}
                    </h3>
                    <p className={styles["dish-list-item--description"]}>
                        {props.dish.description}
                    </p>
                    <h4 className={styles["dish-list-item--price"]}>
                        ${props.dish.price.toFixed(2)}
                    </h4>
                </div>
                <DishAmount dish={props.dish} />
            </li>
            <hr className={styles["dish-list-separator"]} />
        </React.Fragment>
    );
};

export default DishListItem;
