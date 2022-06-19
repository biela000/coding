import { createContext, useState } from "react";
import HomePage from "./components/home-page/HomePage";
import QuizPage from "./components/quiz-page/QuizPage";
import ResultPage from "./components/result-page/ResultPage";

export const InfoContext = createContext({
    firstName: "asd",
    lastName: "asd",
    answers: [],
    pointSum: 0,
    pointPercentage: 0.0,
    setTestInfo: () => {},
});

export default function App() {
    // const [answers, setAnswers] = useState([]);
    // const answers = [];
    // const [studentName, setStudentName] = useState({
    //     firstName: "",
    //     lastName: "",
    // });
    const [testInfo, setTestInfo] = useState({
        firstName: "",
        lastName: "",
        answers: [],
        pointSum: 0,
        pointPercentage: 0.0,
    });
    const testInfoValue = { testInfo, setTestInfo };
    // const AnswerContext = createContext(answers);
    // function addAnswer(answer) {
    //     // setAnswers(prevAnswers => [...prevAnswers, answer]);
    //     answers.push(answer);
    // }
    // function changeStudentName(newName) {
    //     studentName = newName;
    // }
    const pages = [
        <HomePage handlePageChange={changePage} />,
        <QuizPage handlePageChange={changePage} />,
        <ResultPage />,
    ];
    const [currentPage, setCurrentPage] = useState(pages[0]);
    function changePage(pageIndex) {
        setCurrentPage(pages[pageIndex]);
    }
    return (
        <div className="app">
            <InfoContext.Provider value={testInfoValue}>
                {currentPage}
            </InfoContext.Provider>
        </div>
    );
}
