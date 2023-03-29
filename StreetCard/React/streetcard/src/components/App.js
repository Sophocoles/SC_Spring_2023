import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./FHIR/react-fhir-sample-app-master/src/components/Launcher";
import Redirect from "./FHIR/react-fhir-sample-app-master/src/components/Redirect";
import ApptResources from "./FHIR/react-fhir-sample-app-master/src/components/Resources/ApptResources";
import EncResources from "./FHIR/react-fhir-sample-app-master/src/components/Resources/EncResources";
import ObsResources from "./FHIR/react-fhir-sample-app-master/src/components/Resources/ObsResources";
import ResourceProvider from "./FHIR/react-fhir-sample-app-master/src/components/ResourceProvider";
import LandingPage from "./LandingPage";
import FHIRLandingPage from "./FHIRLandingPage";
import DjangoDisplay from "./FHIR/Django/DjangoDisplay";
import Display from "./FHIR/App/src/components/Display";
import LoginPage from "./provider_app/react/pages/LoginPage";
import PatientSelect from "./provider_app/react/pages/PatientSelect";
import Navbar from "./provider_app/react/components/Navbar";
import PatientOverview from "./provider_app/react/pages/PatientOverview";

import Home from './site_frontend/pages/Home';
import About from './site_frontend/pages/About';
import Mission from './site_frontend/pages/Mission';
import Newsletter from './site_frontend/pages/Newsletter';
import ServDir from './site_frontend/pages/ServDir';
import Dash from './site_frontend/pages/Dash';
import ProviderDash from './site_frontend/pages/ProviderDash';
import ClientDash from './site_frontend/pages/ClientDash';
import Stats from './site_frontend/pages/Stats';
import Help from './site_frontend/pages/Help';
import Contact from './site_frontend/pages/Contact';
import Assist from './site_frontend/pages/Assist';


function App() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in on initial load and update state accordingly
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log("Error checking login status", error);
      }
    };

    checkLoginStatus();
  }, []);

  // Handle user logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <ResourceProvider>
      <div>
        <BrowserRouter>
          {/* Conditionally render the Navbar component if the user is logged in */}
          {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
          <Routes>
            <Route path="/patientSelect" element={<PatientSelect />} />
            <Route
              path="/providerLogin"
              element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
            />

            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/servDir" element={<ServDir />} />
            <Route path="/dash" element={<Dash />} />
            <Route path='/ProviderDash' element={<ProviderDash />} />
            <Route path='/ClientDash' element={<ClientDash />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/assist" element={<Assist />} />
            
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/apptResources" element={<ApptResources />} />
            <Route path="/encResources" element={<EncResources />} />
            <Route path="/obsResources" element={<ObsResources />} />
            <Route path="/Launcher" element={<Launcher />} />
            <Route path="/FHIRLandingPage" element={<FHIRLandingPage />} />
            <Route path="/DjangoDisplay" element={<DjangoDisplay />} />
            <Route path="/Display" element={<Display />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/encounter/:id" element={<EncounterDetail />} />
            <Route path="/patientOverview/:id" element={<PatientOverview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ResourceProvider>
  );
}

function EncounterDetail({ match }) {
  return <h2>Encounter ID: {match.params.id}</h2>;
}

export default App;
