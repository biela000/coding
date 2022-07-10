import React, { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
    const [user, setUser] = useState(null);
    const userLoginHandler = (userData) => {
        setUser({
            ...userData,
        });
    };
    const userLogoutHandler = () => {
        setUser(null);
    };
    return (
        <React.Fragment>
            <MainHeader user={user} onLogout={userLogoutHandler} />
            {!user && <Login onSubmit={userLoginHandler} />}
            {user && <Home userEmailAddress={user.emailAddress} />}
        </React.Fragment>
    );
};

export default App;
