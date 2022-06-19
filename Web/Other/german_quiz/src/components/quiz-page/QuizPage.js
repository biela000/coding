import { createContext, useContext, useState } from "react";
import Question from "./Question";
import questionData from "./question-data";
import { InfoContext } from "../../App";
import { useForm } from "@formspree/react";

export const QuestionStylesContext = createContext();
for (let i = questionData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionData[i], questionData[j]] = [questionData[j], questionData[i]];
}
export const questionDataEx = questionData;

export default function QuizPage(props) {
    const [questionId, setQuestionId] = useState(0);
    const { testInfo, setTestInfo } = useContext(InfoContext);
    const answerElements = document.getElementsByClassName("answer-input");
    const goNextButton = document.querySelector(
        ".quiz-page--next-question-button"
    );
    const goNextButtonTimer = document.querySelector(
        ".question--next-question-button--timer timer-animation"
    );
    const pointPercentage = (testInfo.pointSum / testInfo.answers.length) * 100;
    const [state, handleSubmit] = useForm("xwkyaakl", {
        data: {
            ...testInfo,
            pointPercentage: pointPercentage,
            result:
                pointPercentage === 100
                    ? 6
                    : pointPercentage >= 90
                    ? 5
                    : pointPercentage >= 70
                    ? 4
                    : pointPercentage >= 50
                    ? 3
                    : pointPercentage >= 40
                    ? 2
                    : 1,
        },
    });
    function changeQuestion() {
        if (questionId < questionData.length - 1) {
            setQuestionId((prevQuestionId) => prevQuestionId + 1);
        } else {
            props.handlePageChange(2);
        }
    }
    const [chosenAnswer, setChosenAnswer] = useState([]);
    const defaultQuestionStyles = {
        backgroundColor: "var(--bg-color-light)",
        color: "var(--border-color-light)",
    };
    const [questionStyles, setQuestionStyles] = useState(defaultQuestionStyles);
    function handleGoNext(event) {
        let confirmedAnswer;
        if (questionData[questionId].questionType === "closedMultiple") {
            confirmedAnswer = [...chosenAnswer].sort().join("");
        } else {
            confirmedAnswer = [...chosenAnswer].join("");
        }
        console.log(confirmedAnswer);
        setQuestionStyles({
            backgroundColor:
                confirmedAnswer === questionData[questionId].correctAnswer
                    ? "#C1E1C1"
                    : "var(--border-color-light)",
            color: "var(--bg-color)",
        });
        for (let i = 0; i < answerElements.length; i++) {
            answerElements[i].disabled = true;
        }
        document.querySelector(
            ".question--next-question-button"
        ).disabled = true;
        document
            .querySelector(".question--next-question-button--timer")
            .classList.remove("timer-animation");
        const timer = setTimeout(() => {
            setTestInfo((prevTestInfo) => {
                return {
                    ...prevTestInfo,
                    answers: [...prevTestInfo.answers, confirmedAnswer],
                    pointSum:
                        confirmedAnswer ===
                        questionData[questionId].correctAnswer
                            ? prevTestInfo.pointSum + 1
                            : prevTestInfo.pointSum,
                };
            });
            setChosenAnswer([]);
            changeQuestion();
            setQuestionStyles(defaultQuestionStyles);
            // setQuestionAnswers(defaultQuestionAnswers);
            for (let i = 0; i < answerElements.length; i++) {
                answerElements[i].disabled = false;
            }
            document.querySelector(
                ".question--next-question-button"
            ).disabled = false;
            document
                .querySelector(".question--next-question-button--timer")
                .classList.add("timer-animation");
        }, 5000);
        return () => clearTimeout(timer);
    }
    const batteryElements = testInfo.answers.map((answer, index) => {
        return (
            <div
                key={index}
                className="battery-element"
                style={{
                    backgroundColor:
                        answer === questionDataEx[index].correctAnswer
                            ? "#C1E1C1"
                            : "var(--border-color-light)",
                }}
            ></div>
        );
    });
    return (
        <div className="quiz-site" style={{ paddingBottom: "100px" }}>
            <div className="question-info">
                <div className="battery">{batteryElements}</div>
                <div className="current-score">
                    <span className="current-score--part1">
                        {testInfo.pointSum}
                    </span>{" "}
                    / {questionDataEx.length}
                </div>
            </div>
            <Question
                handleChangeQuestion={changeQuestion}
                handleAnswerAdd={props.handleAnswerAdd}
                handleChangeAnswer={setChosenAnswer}
                chosenAnswer={chosenAnswer}
                questionStyles={questionStyles}
                {...questionData[questionId]}
            />
            {/* {questionId < questionData.length - 1 && ( */}
            <button
                className="question--next-question-button"
                onClick={handleGoNext}
            >
                <span
                    className="question--next-question-button--timer timer-animation"
                    onAnimationEnd={handleGoNext}
                    style={{
                        animationDuration: `${questionDataEx[questionId].questionTime}s`,
                    }}
                ></span>
                <span className="question--next-question-button--text">
                    zatwierdź
                </span>
            </button>
            {/* )} */}
            {/* {questionId === questionData.length - 1 && (
                <form onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        className="quiz-page--next-question-button"
                        onClick={handleGoNext}
                    >
                        do i wanna know
                    </button>
                </form>
            )} */}
        </div>
    );
}

// TODO: TWOJA MAMUSIA
