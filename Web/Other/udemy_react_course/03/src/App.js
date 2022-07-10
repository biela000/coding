import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
    const [users, setUsers] = useState([]);
    const defaultError = {
        title: "",
        text: "",
    };
    const [error, setError] = useState(defaultError);
    const dismissError = () => {
        setError(defaultError);
    };
    const addNewUserHandler = (newUserInfo) => {
        if (newUserInfo.username === "" || newUserInfo.age === null) {
            setError({
                title: "Invalid input",
                text: "Please enter a valid name and age (non-empty values)",
            });
            return;
        }
        if (newUserInfo.age.toString() === "NaN") {
            setError({
                title: "Invalid input",
                text: "Please enter a valid age (number)",
            });
            return;
        }
        if (newUserInfo.age < 1) {
            setError({
                title: "Invalid input",
                text: "Please enter a valid age (> 0)",
            });
            return;
        }
        setError(defaultError);
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random(),
                    ...newUserInfo,
                },
            ];
        });
    };
    return (
        <div className="app">
            <NewUser onFormSubmit={addNewUserHandler} />
            <UserList items={users} />
            {error.title !== "" && (
                <ErrorMessage
                    errorTitle={error.title}
                    errorText={error.text}
                    onBackdropClick={dismissError}
                />
            )}
        </div>
    );
};

export default App;
