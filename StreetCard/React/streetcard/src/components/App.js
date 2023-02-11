import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./Launcher";
import Redirect from "./Redirect";
import LandingPage from "./LandingPage";

console.log("Inside app"); 

export default function App() {
    return (
        <div>
            <BrowserRouter>
              <Routes>
                <Route path='/redirect' element={<Redirect/>} />
                <Route path='/Launcher' element={<Launcher/>} />
                <Route path='/' element={<LandingPage/>} />
              </Routes>
                
            </BrowserRouter>
        </div>
    );
}