import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Navbar = (props) => {
    
    




  
      

    return ( 
        <nav className="navbar">
            <h1>StreetCard</h1>
            <div className="links">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/about">About</Link>
                <Link className="links" to="/mission">Mission</Link>
                <Link className="links" to="/newsletter">Newsletter</Link>
                <Link className="links" to="/servDir">Service Directory</Link>
                <Link className="links" to="/dash">Dashboard</Link>
                <Link className="links" to="/stats">Statistics</Link>
                <Link className="links" to="/help">How Can I Help?</Link>
                <Link className="links" to="/contact">Contact</Link>
                <Link className="links" to="/assist">Technical Assistance</Link>
                <Link className="links" to="/login">Login / Signup</Link>
                <div>
                {props.user}
                </div>

                

            </div>
        </nav>
    );
};
 
export default Navbar;