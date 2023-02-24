import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function FHIRLandingPage() {
  return (
    <div className="landing-page">
      <div id="header">FHIR shortcuts</div>
      <Link to="/Launcher"><button className="large-center-button">FHIR React App</button></Link>
      <Link to="/FHIRView"><button className="large-center-button">FHIR tests</button></Link>
    </div>
  );
}

export default FHIRLandingPage;