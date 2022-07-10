import Button from "../UI/Button";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
    return (
        <div className={styles["main-header"]}>
            <h1>A Typical Page</h1>
            {props.user && (
                <div className={styles["main-header--actions"]}>
                    <Button>Users</Button>
                    <Button>Admin</Button>
                    <Button
                        className={styles["main-header--logout"]}
                        onClick={props.onLogout}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default MainHeader;
