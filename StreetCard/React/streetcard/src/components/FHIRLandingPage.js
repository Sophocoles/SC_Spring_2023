import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'

function FHIRLandingPage() {
  return (
    <div className="landing-page">
      <div id="header">FHIR shortcuts</div>
      <Link to="/providerLogin"><button className="large-center-button">Provider Facing FHIR app</button></Link>
      <Link to="/Launcher"><button className="large-center-button">ARCHIVE: FHIR React App</button></Link>
      <Link to="/DjangoDisplay"><button className="large-center-button">ARCHIVE: FHIR tests</button></Link>
      <Link to="/Display"><button className="large-center-button">ARCHIVE: App dev</button></Link>
    </div>
  );
}

export default FHIRLandingPage;
