import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Link to="/Launcher"><button className="large-center-button">FHIR React App</button></Link>
      <button className="large-center-button">Old tier 1</button>
      <button className="large-center-button">Current landing page</button>
      <button className="large-center-button">Button 4</button>
    </div>
  );
}

export default LandingPage;
