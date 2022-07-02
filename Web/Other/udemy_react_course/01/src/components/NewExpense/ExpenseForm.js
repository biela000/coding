import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [expenseFormValues, setExpenseFormValues] = useState({
        title: "",
        amount: "",
        date: "",
    });
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setExpenseFormValues((prevExpenseFormValues) => {
            return {
                ...prevExpenseFormValues,
                [name]: value,
            };
        });
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(expenseFormValues);
        setExpenseFormValues({
            title: "",
            amount: "",
            date: "",
        });
    };
    return (
        <form className="expense-form" onSubmit={submitHandler}>
            <div className="expense-form--controls">
                <div className="expense-form--control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={expenseFormValues.title}
                        onChange={changeHandler}
                    />
                </div>
                <div className="expense-form--control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="text"
                        name="amount"
                        id="amount"
                        value={expenseFormValues.amount}
                        onChange={changeHandler}
                    />
                </div>
                <div className="expense-form--control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        name="date"
                        id="date"
                        value={expenseFormValues.date}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="expense-form--actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
