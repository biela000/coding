import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import MainContent from "./main-content";
import Footer from "./footer";

const root = document.querySelector("#root");

// ReactDOM.render(
//     <ul>
//         <li>Koty</li>
//         <li>Psy</li>
//     </ul>
// , root);

// function MainContent() {
//     return <h1>Helikopter helikopter</h1>;
// } 

// ReactDOM.render(<MainContent />, root);

// const header = document.createElement("h1");
// header.innerText = "Polska polska polska";
// header.classList.add("header");
// root.appendChild(header);

// function TutVigation() {
//     return (
//         <nav>
//             <h1>Witaj sadas</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
//     );
// }
// ReactDOM.render(<h1>afsafa</h1>, root);

// function ReactFunFacts() {
//     return (
//         <div>
//             <img src="./react-logo.png" width="40" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     );
// }

// ReactDOM.render(<ReactFunFacts />, root);

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, root);