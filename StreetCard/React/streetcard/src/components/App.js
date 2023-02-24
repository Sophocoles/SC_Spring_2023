import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./Launcher";
import Redirect from "./Redirect";
import LandingPage from "./LandingPage";
import FHIRLandingPage from "./FHIRLandingPage";
import FHIRView from "./FHIR/FHIRView";
//import {default as OtherApp}from "../archive/old_tier_1/SER517-P6-Street-Card-master/frontend/src/App.js"; // Import the other project's App component
import './App.css'



console.log("Inside app"); 

//Give values manually
const streetcardItems = [
  {
    id:5,
    name: "cerner",
    client_id: "taken from .env.local",
    scope: "openid profile patient/Patient.read patient/AllergyIntolerance.read patient/Condition.read",
    url: "https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",
    redirect_uri:"http://localhost:9000/redirect",
    patientId: "",
    patientName: "",
  }
]
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
          <Route path='/FHIRView' element={<FHIRView/>} />
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
//Path Routing end
}














export default App;
