import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = "Car Insurance";
    // const expensePrice = "$297.21";
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated!");
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item--description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item--price">${props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
