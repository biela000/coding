import { useEffect, useState } from "react";

export default function Question(props) {
    const [chosenAnswer, setChosenAnswer] = useState("");
    const [isFinished, setIsFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const answerElements = document.getElementsByClassName("question--answer-section--answer");
    function handleAnswerChange(event) {
        const {value} = event.target;
        setChosenAnswer(value);
    }
        //#FF6961
    const questionStyles = {
        backgroundColor: isFinished ? isCorrect ? "#C1E1C1" : "var(--border-color-light)" : "var(--bg-color-light)",
        color: isFinished ? "var(--bg-color)" : "var(--border-color-light)"
    };
    return (
        <div className="question">
            <section className="question--question-section" style={questionStyles}>
                <h2 className="question--question-section--text">{!isFinished ? props.question : isCorrect ? "Poprawna odpowiedź" : "Nieprawidłowa odpowiedź"}</h2>
            </section>
            <section className="question--answer-section">
                <div className="question--answer-section--answer">
                    <input
                        type="radio"
                        name="chosenAnswer"
                        id="answerA"
                        value="A"
                        checked={chosenAnswer === "A"}
                        onChange={handleAnswerChange}
                        className="question--answer-section--answer--answer-radio"
                    />
                    <label htmlFor="answerA" className="question--answer-section--answer--answer-text">{props.answerA}</label>
                </div>
                <div className="question--answer-section--answer">
                    <input
                        type="radio"
                        name="chosenAnswer"
                        id="answerB"
                        value="B"
                        checked={chosenAnswer === "B"}
                        onChange={handleAnswerChange}
                        className="question--answer-section--answer--answer-radio"
                    />
                    <label htmlFor="answerB" className="question--answer-section--answer--answer-text">{props.answerB}</label>
                </div>
                <div className="question--answer-section--answer">
                    <input
                        type="radio"
                        name="chosenAnswer"
                        id="answerC"
                        value="C"
                        checked={chosenAnswer === "C"}
                        onChange={handleAnswerChange}
                        className="question--answer-section--answer--answer-radio"
                    />
                    <label htmlFor="answerC" className="question--answer-section--answer--answer-text">{props.answerC}</label>
                </div>
            </section>
            <button className="question--next-question-button" onClick={() => {
                props.handleAnswerAdd(chosenAnswer);
                setIsCorrect(chosenAnswer === props.correctAnswer);
                setIsFinished(true);
                for (let i = 0; i < 3; i++) {
                    answerElements[i].classList.add("disable-events");
                }
                const timer = setTimeout(() => {
                    props.handleChangeQuestion();
                    setIsFinished(false);
                    setChosenAnswer("");
                    for (let i = 0; i < 3; i++) {
                        answerElements[i].classList.remove("disable-events");
                    }
                }, 1000);
                return () => clearTimeout(timer);
            }}>zatwierdź</button>
        </div>
    );
}