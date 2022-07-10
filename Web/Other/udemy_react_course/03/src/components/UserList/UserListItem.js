import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
    return (
        <li className={styles["user-list-item"]}>
            {props.username} ({props.age} year{props.age !== 1 && "s"} old)
        </li>
    );
};

export default UserListItem;
