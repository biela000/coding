import React, { useState, useEffect } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const App = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const localUserData = {
            emailAddress: localStorage.getItem("userEmail"),
            password: localStorage.getItem("userPassword"),
        };
        if (localUserData.emailAddress && localUserData.password) {
            setUser(localUserData);
        }
        //return () => {} - clenup function która się dzieje przed kazdym uruchomieniem useEffect oprócz pierwszego
    }, []);
    const userLoginHandler = (userData) => {
        localStorage.setItem("userEmail", userData.emailAddress);
        localStorage.setItem("userPassword", userData.password);
        setUser({
            ...userData,
        });
    };
    const userLogoutHandler = () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
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
