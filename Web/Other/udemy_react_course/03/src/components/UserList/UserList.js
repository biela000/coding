import Card from "../UI/Card";
import UserListItem from "./UserListItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
    const userElements = props.items.map((item) => {
        return (
            <UserListItem
                key={item.id}
                username={item.username}
                age={item.age}
            />
        );
    });
    return (
        userElements.length > 0 && (
            <Card>
                <ul className={styles["user-list"]}>{userElements}</ul>
            </Card>
        )
    );
};

export default UserList;
