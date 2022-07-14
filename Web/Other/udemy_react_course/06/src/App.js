import React, { Component } from "react";
import Users from "./components/Users";

const DUMMY_USERS = [
    { id: "u1", name: "dragonslayer123" },
    { id: "u2", name: "womhandler999" },
    { id: "u3", name: "manbunss22" },
];

class App extends Component {
    render() {
        return (
            <React.Component>
                <Users users={DUMMY_USERS} />
            </React.Component>
        );
    }
}

export default App;
