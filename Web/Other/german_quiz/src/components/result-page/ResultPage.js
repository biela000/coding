import { useState } from "react";
import ResultForm from "./ResultForm";

export default function ResultPage(props) {
    const result = 20;
    console.log(props.answers);
    return <ResultForm answers={props.answers} result={result} />
}