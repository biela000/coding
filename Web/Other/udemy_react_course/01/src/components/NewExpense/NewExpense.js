import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    return (
        <Card className="new-expense">
            <ExpenseForm
                onSaveExpenseData={(newExpense) =>
                    props.onSaveExpenseData(newExpense)
                }
            />
        </Card>
    );
};

export default NewExpense;
