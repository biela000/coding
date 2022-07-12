import React, { useContext } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthContext from "./components/context/auth-context";

const App = () => {
    const authCtx = useContext(AuthContext);
    return (
        <React.Fragment>
            <MainHeader />
            {!authCtx.isLoggedIn && <Login />}
            {authCtx.isLoggedIn && <Home />}
        </React.Fragment>
    );
};

export default App;
