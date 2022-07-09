import NewGoalForm from "./NewGoalForm";
import "./NewGoal.css";

const NewGoal = (props) => {
    return (
        <div className="new-goal">
            <NewGoalForm onSaveCourseGoal={props.onSaveCourseGoal} />
        </div>
    );
};

export default NewGoal;
