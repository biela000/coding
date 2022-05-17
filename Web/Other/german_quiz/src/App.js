import { useEffect, useState } from "react";
import HomePage from "./components/home-page/HomePage";
import QuizPage from "./components/quiz-page/QuizPage";
import ResultPage from "./components/result-page/ResultPage";

export default function App() {
    const [answers, setAnswers] = useState([]);
    function addAnswer(answer) {
        setAnswers(prevAnswers => [...prevAnswers, answer]);
    }
    const pages = [<HomePage handlePageChange={changePage} />, <QuizPage handlePageChange={changePage} handleAnswerAdd={addAnswer} />, <ResultPage answers={answers} />];
    const [currentPage, setCurrentPage] = useState(pages[0]);
    console.log(answers);
    function changePage(pageIndex) {
        setCurrentPage(pages[pageIndex]);
    }
    return (
        <div className="app">
            {currentPage}
        </div>
    );
}