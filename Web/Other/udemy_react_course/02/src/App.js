import { useState } from "react";
import NewGoal from "./components/NewGoal/NewGoal";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        {
            id: "g1",
            name: "Do all exercises!",
        },
        {
            id: "g2",
            name: "Finish the course!",
        },
    ]);
    const saveNewCourseGoalHandler = (newCourseGoal) => {
        setCourseGoals((prevCourseGoals) => [
            ...prevCourseGoals,
            {
                id: "g" + Math.random(),
                name: newCourseGoal,
            },
        ]);
    };
    const removeCourseGoalHandler = (index) => {
        setCourseGoals((prevCourseGoals) => {
            const newCourseGoals = [];
            for (const courseGoal of prevCourseGoals) {
                if (courseGoal.id !== index) {
                    newCourseGoals.push(courseGoal);
                }
            }
            return newCourseGoals;
        });
    };
    return (
        <div className="app">
            <NewGoal onSaveCourseGoal={saveNewCourseGoalHandler} />
            <GoalList
                items={courseGoals}
                onRemoveGoal={removeCourseGoalHandler}
            />
        </div>
    );
};

export default App;
