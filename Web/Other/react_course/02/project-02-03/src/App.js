import { useState } from "react";
import Joke from "./components/Joke";
import jokesData from "./jokes-data";

// export default function App() {
//     const jokes = jokesData.map((joke, index) => <Joke key={index} setup={joke.setup} punchline={joke.punchline} />);
//     return (
//         <div className="jokes">
//             {jokes}
//         </div>
//     );
// }

export default function App() {
    const [messages, setMessages] = useState(["a", "b"]);
    return (
        <div>
            {messages.length === 0 && <h1>You are all caught up</h1>}
            {messages.length > 0 && <h1>You have {messages.length} message{messages.length > 1 && "s"} unread!</h1>}
        </div>
    );
}