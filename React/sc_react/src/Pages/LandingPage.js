import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to StreetCard</h1>
      <Link to="/patients">
        <button className="large-center-button">FHIR</button>
      </Link>
      <button className="large-center-button">Old tier 1</button>
      <button className="large-center-button">Current landing page</button>
      <button className="large-center-button">Button 4</button>
    </div>
  );
};

export default LandingPage;