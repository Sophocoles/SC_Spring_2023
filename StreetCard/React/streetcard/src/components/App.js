import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launcher from "./FHIR/react-fhir-sample-app-master/src/components/Launcher";
import Chart from "./FHIR/react-fhir-sample-app-master/src/components/Chart";
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
            <Route exact path="/" component={Chart} />
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
