import { useContext, useState, useEffect } from "react";
import { InfoContext } from "../../App";
import { useForm } from "@formspree/react";

export default function Question(props) {
    const { testInfo, setTestInfo } = useContext(InfoContext);
    const defaultQuestionAnswers = {
        closedSingle: "",
        closedMultiple: [false, false, false, false],
        open: "",
    };
    const [questionAnswers, setQuestionAnswers] = useState(
        defaultQuestionAnswers
    );
    const goNextButtonTimer = document.querySelector(
        ".question--next-question-button--timer"
    );
    useEffect(() => {
        setQuestionAnswers(defaultQuestionAnswers);
    }, [testInfo]);
    function handleAnswerChange(event) {
        const { type, name, checked, value } = event.target;
        setQuestionAnswers((prevQuestionAnswers) => {
            function getNewQuestionAnswers() {
                const newQuestionAnswers = [];
                for (
                    let i = 0;
                    i < prevQuestionAnswers.closedMultiple.length;
                    i++
                ) {
                    if (i == name[name.length - 1]) {
                        newQuestionAnswers.push(checked);
                    } else {
                        newQuestionAnswers.push(
                            prevQuestionAnswers.closedMultiple[i]
                        );
                    }
                }
                return newQuestionAnswers;
            }
            return {
                ...prevQuestionAnswers,
                [type === "checkbox" ? "closedMultiple" : ""]:
                    getNewQuestionAnswers(),
                [type !== "checkbox" ? name : ""]: value,
            };
        });
        if (type === "radio") {
            props.handleChangeAnswer([]);
        }
        if (name !== "open" && checked) {
            props.handleChangeAnswer((prevConfirmedAnswer) => [
                ...prevConfirmedAnswer,
                value,
            ]);
        } else if (name !== "open") {
            props.handleChangeAnswer((prevConfirmedAnswer) => {
                const newConfirmedAnswer = [];
                prevConfirmedAnswer.forEach((answer) => {
                    if (answer !== value) {
                        newConfirmedAnswer.push(answer);
                    }
                });
                console.log(newConfirmedAnswer);
                return newConfirmedAnswer;
            });
        } else {
            props.handleChangeAnswer([value]);
        }
    }
    // const url = "http://naszSerwer.pl/Jan Kowalski - Projekt_c.psd";
    // const server = url.substring(url.indexOf("//") + 2, url.lastIndexOf("/"));
    // console.log(`Serwer: ${server}`);
    // const workName = url.substring(url.indexOf("-") + 2, url.lastIndexOf("."));
    // console.log(`Nazwa pracy: ${workName}`);
    // const format = url.substring(url.lastIndexOf(".") + 1);
    // console.log(`Format pracy: ${format}`);
    // const author = url.substring(url.lastIndexOf("/") + 1, url.indexOf("-") - 1);
    // console.log(`Autor: ${author}`);
    const possibleAnswers = ["A", "B", "C", "D"];
    let answerInputs = [];
    if (props.questionType.includes("closed")) {
        answerInputs = [
            props.answerA,
            props.answerB,
            props.answerC,
            props.answerD,
        ].map((answerInput, index) => {
            return (
                <div className="question--answer-section--answer" key={index}>
                    <input
                        type={
                            props.questionType === "closedSingle"
                                ? "radio"
                                : "checkbox"
                        }
                        name={
                            props.questionType === "closedSingle"
                                ? props.questionType
                                : props.questionType + index
                        }
                        id={"answer" + possibleAnswers[index]}
                        value={possibleAnswers[index]}
                        checked={
                            props.questionType === "closedSingle"
                                ? questionAnswers.closedSingle ===
                                  possibleAnswers[index]
                                : questionAnswers.closedMultiple[index]
                        }
                        onChange={handleAnswerChange}
                        className="question--answer-section--answer--answer-radio answer-input"
                    />
                    <label
                        htmlFor={"answer" + possibleAnswers[index]}
                        className="question--answer-section--answer--answer-text"
                        style={
                            props.questionStyles.backgroundColor !==
                                "var(--bg-color-light)" &&
                            props.correctAnswer.includes(possibleAnswers[index])
                                ? {
                                      backgroundColor: "#C1E1C1",
                                      color: "var(--bg-color)",
                                  }
                                : {}
                        }
                    >
                        {answerInput}
                        {props.questionType === "closedOrder" &&
                            props.chosenAnswer.indexOf(possibleAnswers[index]) >
                                -1 && (
                                <span className="question--answer-section--answer--answer-text--answer-index">
                                    {props.chosenAnswer.indexOf(
                                        possibleAnswers[index]
                                    ) + 1}
                                </span>
                            )}
                        {props.questionType === "closedOrder" &&
                            props.questionStyles.backgroundColor !==
                                "var(--bg-color-light)" &&
                            props.correctAnswer.includes(
                                possibleAnswers[index]
                            ) && (
                                <span className="question--answer-section--answer--answer-text--correct-answer-index">
                                    {props.correctAnswer.indexOf(
                                        possibleAnswers[index]
                                    ) + 1}
                                </span>
                            )}
                    </label>
                </div>
            );
        });
    }
    return (
        <div className="question">
            <section
                className="question--question-section"
                style={props.questionStyles}
            >
                <h2 className="question--question-section--text">
                    {props.questionStyles.backgroundColor ===
                    "var(--bg-color-light)"
                        ? props.question
                        : props.questionStyles.backgroundColor ===
                          "var(--border-color-light)"
                        ? "Nieprawidłowa odpowiedź"
                        : "Poprawna odpowiedź"}
                </h2>
            </section>
            <section className="question--answer-section">
                <>{answerInputs}</>
                {props.questionType === "open" && (
                    <div className="question--answer-section--answer">
                        <textarea
                            name="open"
                            value={questionAnswers.open}
                            className="question--answer-section--answer--answer-open answer-input"
                            onChange={handleAnswerChange}
                            placeholder="odpowiedź"
                        />
                    </div>
                )}
            </section>
            {/* <button
                className="question--next-question-button"
                onClick={handleGoNext}
            >
                <span
                    className="question--next-question-button--timer timer-animation"
                    onAnimationEnd={handleGoNext}
                ></span>
                <span className="question--next-question-button--text">
                    zatwierdź
                </span>
            </button> */}
        </div>
    );
}
