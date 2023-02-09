import React from 'react';
import { FhirResource, fhirVersions } from 'fhir-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Test from './Pages/Test';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import PatientSelect from './Pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patients" component={PatientSelect} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" component={Test} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
