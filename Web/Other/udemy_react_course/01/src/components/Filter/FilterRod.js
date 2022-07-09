import "./FilterRod.css";

const FilterRod = (props) => {
    const pointerStyles = {
        transform: `scaleY(${
            props.maxCount === 0 ? 0 : props.expenseCount / props.maxCount
        })`,
    };
    return (
        <div className="filter-rod">
            <div className="filter-rod--pointer">
                <div
                    className="filter-rod--inside-pointer"
                    style={pointerStyles}
                ></div>
            </div>
            <h4 className="filter-rod--caption">
                {props.month.substring(0, 3)}
            </h4>
        </div>
    );
};

export default FilterRod;
