import React from "react";
import { Routes, Route } from "react-router-dom";
import Informaçoes from "../pages/Informacoes";
import Tasks from "../pages/Tasks";
function Rotas() {
    return (
        <>
            <Routes>
                <Route element={<Tasks/>} path="/" />
                <Route element={<Informaçoes />} path="/informacoes" />
            </Routes>
        </>
    )
}

export default Rotas;