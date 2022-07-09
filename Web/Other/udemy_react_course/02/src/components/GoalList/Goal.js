import Button from "../UI/Button";
import "./Goal.css";

const Goal = (props) => {
    return (
        <Button className="goal" onClick={() => props.onRemoveGoal(props.id)}>
            {props.goalName}
        </Button>
    );
};

export default Goal;
