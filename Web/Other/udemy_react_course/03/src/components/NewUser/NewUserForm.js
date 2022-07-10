import styles from "./NewUserForm.module.css";

const NewUserForm = (props) => {
    const changeHandler = (event) => {
        const { name, value } = event.target;
        props.formValuesState.func((prevFormValues) => {
            return {
                ...prevFormValues,
                [name]: value,
            };
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit();
    };
    return (
        <form className={styles["new-user-form"]} onSubmit={submitHandler}>
            <div className={styles["new-user-form--inputs"]}>
                <div className={styles["new-user-form--input"]}>
                    <label htmlFor="username-input">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username-input"
                        value={props.formValuesState.var.username}
                        onChange={changeHandler}
                    />
                </div>
                <div className={styles["new-user-form--input"]}>
                    <label htmlFor="age-input">Age (Years)</label>
                    <input
                        type="text"
                        name="age"
                        id="age-input"
                        value={props.formValuesState.var.age}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <button type="submit">Add User</button>
        </form>
    );
};

export default NewUserForm;
