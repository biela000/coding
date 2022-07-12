import { useContext } from "react";
import AuthContext from "../context/auth-context";
import Button from "../UI/Button";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
    const authCtx = useContext(AuthContext);
    return (
        <div className={styles["main-header"]}>
            <h1>A Typical Page</h1>
            {authCtx.isLoggedIn && (
                <div className={styles["main-header--actions"]}>
                    <Button>Users</Button>
                    <Button>Admin</Button>
                    <Button
                        className={styles["main-header--logout"]}
                        onClick={authCtx.onLogout}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default MainHeader;
