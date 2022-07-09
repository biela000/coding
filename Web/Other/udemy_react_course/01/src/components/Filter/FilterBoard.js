import Card from "../UI/Card";
import FilterRod from "./FilterRod";
import "./FilterBoard.css";

const FilterBoard = (props) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const rods = months.map((month) => {
        return (
            <FilterRod
                key={month}
                month={month}
                expenseCount={
                    props.expenses.filter(
                        (expense) =>
                            expense.date.toLocaleString("en-US", {
                                month: "long",
                            }) === month
                    ).length
                }
                maxCount={props.expenses.length}
            />
        );
    });
    return <Card className="filter-board">{rods}</Card>;
};

export default FilterBoard;
