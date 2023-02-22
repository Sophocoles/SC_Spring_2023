import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./Launcher";
import Redirect from "./Redirect";
import LandingPage from "./LandingPage";
import FHIRLandingPage from "./FHIRLandingPage";
//import {default as OtherApp}from "../archive/old_tier_1/SER517-P6-Street-Card-master/frontend/src/App.js"; // Import the other project's App component
import './App.css'


console.log("Inside app"); 

//Give values manually
const scItems = [
  {
    id: 1,
    title: "Go to Market",
    description: "Buy ingredients to prepare dinner",
    completed: true,
  },
  {
    id: 2,
    title: "Study",
    description: "Read Algebra and History textbook for the upcoming test",
    completed: false,
  },
  {
    id: 3,
    title: "Sammy's books",
    description: "Go to library to return Sammy's books",
    completed: true,
  },
  {
    id: 4,
    title: "Article",
    description: "Write article on how to use Django with React",
    completed: false,
  },
];
//End setup of Django fields


//What does


//Path Routing start
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/redirect' element={<Redirect/>} />
          <Route path='/Launcher' element={<Launcher/>} />
          <Route path='/FHIRLandingPage' element={<FHIRLandingPage/>} />
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
//Path Routing end
}







export default App;
