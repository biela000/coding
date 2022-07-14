import { Component } from "react";
import User from "./User";
import styles from "./Users.module.css";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
        };
    }
    showUsersHandler() {
        this.setState((prevState) => ({
            showUsers: !prevState.showUsers,
        }));
    }
    render() {
        const userElements = this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
        ));
        return (
            <div className={styles.users}>
                <button
                    className={styles["users--show-button"]}
                    onClick={this.showUsersHandler.bind(this)}
                >
                    {this.state.showUsers ? "Hide" : "Show"} users
                </button>
                <ul className={styles["users--user-list"]}>{userElements}</ul>
            </div>
        );
    }
}

export default Users;
