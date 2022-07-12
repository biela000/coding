import Card from "../UI/Card/Card";
import DishListItem from "./DishListItem/DishListItem";
import dishData from "../../data/dishes";
import styles from "./DishList.module.css";

const DishList = () => {
    const dishListElements = dishData.map((dish) => {
        return <DishListItem key={dish.id} dish={dish} />;
    });
    return (
        <Card className={styles["dish-list-container"]}>
            <ul className={styles["dish-list"]}>{dishListElements}</ul>
        </Card>
    );
};

export default DishList;
