import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const dismissError = () => {
        setError(false);
    };
    const defaultFormValues = {
        username: "",
        age: "",
    };
    const [formValues, setFormValues] = useState(defaultFormValues);
    const addNewUserHandler = () => {
        if (isNaN(+formValues.age)) {
            setError({
                title: "Invalid input",
                text: "Please enter a valid age (number)",
            });
            return;
        }
        if (!formValues.username || !+formValues.age) {
            setError({
                title: "Invalid input",
                text: "Please enter a valid name and age (non-empty values)",
            });
            return;
        }
        if (+formValues.age < 1) {
            setError({
                title: "Invalid input",
                text: "Please enter a valid age (> 0)",
            });
            return;
        }
        setFormValues(defaultFormValues);
        setError(false);
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random(),
                    username: formValues.username,
                    age: +formValues.age,
                },
            ];
        });
    };
    return (
        <div className="app">
            <NewUser
                onFormSubmit={addNewUserHandler}
                formValuesState={{ var: formValues, func: setFormValues }}
            />
            <UserList items={users} />
            {error.title && (
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
