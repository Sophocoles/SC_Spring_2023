import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./Launcher";
import Redirect from "./Redirect";
import LandingPage from "./LandingPage";
//import {default as OtherApp}from "../archive/old_tier_1/SER517-P6-Street-Card-master/frontend/src/App.js"; // Import the other project's App component
import './App.css'


console.log("Inside app"); 

function App() {
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

export default App;
