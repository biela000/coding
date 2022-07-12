import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        //return () => {} - clenup function która się dzieje przed kazdym uruchomieniem useEffect oprócz pierwszego
    }, []);
    const userLoginHandler = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
    };
    const userLogoutHandler = () => {
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn === "true" ? true : false,
                onLogin: userLoginHandler,
                onLogout: userLogoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
