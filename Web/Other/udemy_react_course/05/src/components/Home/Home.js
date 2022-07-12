import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <Card className={styles.home}>
            <h2 className={styles["home--heading"]}>
                Delicious Food, Delivered To You
            </h2>
            <p className={styles["home--paragraph"]}>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className={styles["home--paragraph"]}>
                All our meals are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </Card>
    );
};

export default Home;
