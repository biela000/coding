import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
    const expenseYear = props.date.getFullYear();
    const expenseDay = props.date.getDate();
    return (
        <div className="expense-date">
            <h3>{expenseMonth}</h3>
            <p>{expenseYear}</p>
            <h2>{expenseDay}</h2>
        </div>
    );
};

export default ExpenseDate;
