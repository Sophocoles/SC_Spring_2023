import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./Launcher";
import Redirect from "./Redirect";

console.log("Inside app"); 

export default function App() {
    return (
        <div>
            <BrowserRouter>
              <Routes>
                <Route path='/redirect' element={<Redirect/>} />
                <Route path='/' element={<Launcher/>} />
              </Routes>
                
            </BrowserRouter>
        </div>
    );
}