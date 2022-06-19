import { useState, useContext, useEffect } from "react";
import ResultForm from "./ResultForm";
import { questionDataEx } from "../quiz-page/QuizPage";
import { InfoContext } from "../../App";
import { useForm } from "@formspree/react";

export default function ResultPage() {
    const { testInfo } = useContext(InfoContext);
    const pointPercentage = (testInfo.pointSum / questionDataEx.length) * 100;
    const result =
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
            : 1;
    // useEffect(() => {
    //     document.querySelector(".submit-form").submit();
    // }, []);
    const [state, handleSubmit] = useForm("xwkyaakl", {
        data: {
            ...testInfo,
            correctAnswers: [
                ...questionDataEx.map((question) => question.correctAnswer),
            ],
            questions: [...questionDataEx.map((question) => question.question)],
            result: result,
            pointPercentage: pointPercentage,
            possibleAnswers: [
                ...questionDataEx.map((question, index) => [
                    index,
                    question.answerA,
                    question.answerB,
                    question.answerC,
                    question.answerD,
                ]),
            ],
        },
    });
    useEffect(() => {
        document.querySelector(".send-button").click();
    }, []);
    const answerComparison = questionDataEx.map((question, index) => {
        const studentAnswer = question.questionType.includes("closed")
            ? [...testInfo.answers[index]].map((answerLetter) =>
                  answerLetter === "A"
                      ? question.answerA
                      : answerLetter === "B"
                      ? question.answerB
                      : answerLetter === "C"
                      ? question.answerC
                      : question.answerD
              )
            : testInfo.answers[index];
        const correctAnswer = question.questionType.includes("closed")
            ? [...question.correctAnswer].map((answerLetter) =>
                  answerLetter === "A"
                      ? question.answerA
                      : answerLetter === "B"
                      ? question.answerB
                      : answerLetter === "C"
                      ? question.answerC
                      : question.answerD
              )
            : question.correctAnswer;
        return (
            <div className="answer-comparison-row">
                <div className="answer-comparison-row--question">
                    <p>{question.question}</p>
                </div>
                <div className="answer-comparison-row--student-answer">
                    <p>
                        {[...studentAnswer].join("") !== ""
                            ? question.questionType.includes("closed")
                                ? studentAnswer.join(", ")
                                : studentAnswer
                            : "Brak odpowiedzi"}
                    </p>
                </div>
                <div className="answer-comparison-row--correct-answer">
                    <p>
                        {question.questionType.includes("closed")
                            ? correctAnswer.join(", ")
                            : correctAnswer}
                    </p>
                </div>
            </div>
        );
    });
    return (
        <div className="result-page">
            <h2 className="result-page--result-major-heading">Gratulacje!</h2>
            <h3 className="result-page--result-minor-heading">
                Wynik: {testInfo.pointSum}/{questionDataEx.length} ({result})
            </h3>
            <div className="answer-comparison">
                <div className="answer-comparison-row">
                    {/* <div className="answer-comparison-row--question title">
                        <h3>Pytania</h3>
                    </div>
                    <div className="answer-comparison-row--student-answer title">
                        <h3>Twoje</h3>
                    </div>
                    <div className="answer-comparison-row--correct-answer title">
                        <h3>Dobre</h3>
                    </div> */}
                </div>
                {answerComparison}
            </div>
            {/* <ResultForm result={result} /> */}
            <form
                onSubmit={handleSubmit}
                style={{ display: "none" }}
                className="submit-form"
            >
                <button type="submit" className="send-button">
                    asd
                </button>
            </form>
        </div>
    );
}
