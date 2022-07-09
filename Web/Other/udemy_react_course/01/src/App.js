import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import Filter from "./components/Filter/Filter";

const App = () => {
    const [expenses, setExpenses] = useState([
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]);
    const saveExpenseDataHandler = (newExpense) => {
        setExpenses((prevExpenses) => {
            newExpense.date = new Date(newExpense.date);
            newExpense.id = "e" + (prevExpenses.length + 1);
            return [newExpense, ...prevExpenses];
        });
    };
    const [filteredYear, setFilteredYear] = useState("2022");
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div className="app">
            <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
            <Filter
                filteredYearState={{ filteredYear, setFilteredYear }}
                expenses={filteredExpenses}
            />
            <ExpenseList expenses={filteredExpenses} />
        </div>
    );
};

export default App;
