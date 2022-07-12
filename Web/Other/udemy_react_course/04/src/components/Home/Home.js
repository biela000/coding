import { useContext } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import AuthContext from "../context/auth-context";
import styles from "./Home.module.css";

const Home = () => {
    const authCtx = useContext(AuthContext);
    return (
        <Card className={styles.home}>
            <h2>Welcome back</h2>
            <Button
                className={styles["home--logout"]}
                onClick={authCtx.onLogout}
            >
                Logout
            </Button>
        </Card>
    );
};

export default Home;
