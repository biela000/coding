import "./FilterAction.css";

const FilterAction = (props) => {
    const changeHandler = (event) => {
        const { value } = event.target;
        props.filteredYearState.setFilteredYear(value);
    };
    return (
        <div className="filter--action">
            <h3>Filter by year</h3>
            <select
                onChange={changeHandler}
                value={props.filteredYearState.filteredYear}
            >
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
            </select>
        </div>
    );
};

export default FilterAction;
