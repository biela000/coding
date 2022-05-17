import { useState } from "react";
import Question from "./Question";
import questionData from "./question-data";

export default function QuizPage(props) {
    const [questionId, setQuestionId] = useState(0);
    function changeQuestion() {
        if (questionId < questionData.length - 1) {
            setQuestionId(prevQuestionId => prevQuestionId + 1);
        }
        else {
            props.handlePageChange(2);
        }
    }
    return (
        <Question
            handleChangeQuestion={changeQuestion}
            handleAnswerAdd={props.handleAnswerAdd}
            test={props.test}
            {...questionData[questionId]}
        />
    );
}

// TODO: TWOJA MAMUSIA