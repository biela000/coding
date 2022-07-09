import Card from "../UI/Card";
import FilterAction from "./FilterAction";
import FilterBoard from "./FilterBoard";
import "./Filter.css";

const Filter = (props) => {
    return (
        <Card className="filter">
            <FilterAction filteredYearState={props.filteredYearState} />
            <FilterBoard
                filteredYear={props.filteredYearState.filteredYear}
                expenses={props.expenses}
            />
        </Card>
    );
};

export default Filter;
