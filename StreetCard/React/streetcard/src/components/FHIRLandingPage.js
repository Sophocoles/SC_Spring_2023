import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function FHIRLandingPage() {
  return (
    <div className="landing-page">
      <div id="header">FHIR shortcuts</div>
      <Link to="/Launcher"><button className="large-center-button">FHIR React App</button></Link>
      <button className="large-center-button">FHIR Tests</button>
    </div>
  );
}

export default FHIRLandingPage;
