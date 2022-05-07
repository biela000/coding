import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";

export default function App() {
    return (
        <div className="root-wrapper">
            <Navbar />
            <Main />
        </div>
    );
}