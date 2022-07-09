import Goal from "./Goal";
import "./GoalList.css";

const GoalList = (props) => {
    const courseGoalElements = props.items.map((item) => {
        return (
            <Goal
                key={item.id}
                goalName={item.name}
                id={item.id}
                onRemoveGoal={props.onRemoveGoal}
            />
        );
    });
    return <ul className="goal-list">{courseGoalElements}</ul>;
};

export default GoalList;
