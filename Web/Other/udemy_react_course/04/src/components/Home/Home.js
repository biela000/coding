import Card from "../UI/Card";
import Login from "../Login/Login";
import styles from "./Home.module.css";

const Home = (props) => {
    return (
        <Card className={styles.home}>
            <h2>Welcome back {props.userEmailAddress}</h2>
        </Card>
    );
};

export default Home;
