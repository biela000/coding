import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form className="expense-form">
            <div className="expense-form--controls">
                <div className="expense-form--control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className="expense-form--control">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" id="amount" />
                </div>
                <div className="expense-form--control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        id="date"
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
