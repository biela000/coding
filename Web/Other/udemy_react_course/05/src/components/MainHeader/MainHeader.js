import Cart from "./Cart/Cart";
import styles from "./MainHeader.module.css";
import HeaderImage from "../../images/meals.jpg";

const MainHeader = () => {
    return (
        <header className={styles["main-header"]}>
            <div className={styles["main-header--header"]}>
                <h1 className={styles["main-header--heading"]}>ReactMeals</h1>
                <Cart />
            </div>
            <img
                className={styles["main-header--image"]}
                src={HeaderImage}
                alt="Dishes"
            />
        </header>
    );
};

export default MainHeader;
