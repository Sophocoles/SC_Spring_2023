import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import '../LandingPage.css'
import Header from "./Header";
import Home from "./Home";

class FHIRView extends Component {
    render() {
      return (
        <Fragment>
          <Header />
          <Home />
        </Fragment>
      );
    }
  }
  
  export default FHIRView;
