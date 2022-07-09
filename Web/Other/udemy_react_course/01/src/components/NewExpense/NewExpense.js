import { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isFormActive, setIsFormActive] = useState(false);
    const formActivationHandler = () => {
        setIsFormActive((prevIsFormActive) => !prevIsFormActive);
    };
    if (!isFormActive) {
        return (
            <Card className="new-expense">
                <button
                    className="new-expense--form-activation-button"
                    onClick={formActivationHandler}
                >
                    Add new expense
                </button>
            </Card>
        );
    }
    return (
        <Card className="new-expense">
            <ExpenseForm
                onSaveExpenseData={props.onSaveExpenseData}
                onActivationStateChange={formActivationHandler}
            />
        </Card>
    );
};

export default NewExpense;
