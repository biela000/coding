import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpenseList = (props) => {
    const expenseElements = props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
    });
    return <Card className="expense-list">{expenseElements}</Card>;
};

export default ExpenseList;
