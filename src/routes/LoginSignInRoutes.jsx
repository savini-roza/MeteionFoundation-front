import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";

function LoginSignInRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<SignIn />} path="/cadastro" />
            </Routes>
        </>
    )
}

export default LoginSignInRoutes;