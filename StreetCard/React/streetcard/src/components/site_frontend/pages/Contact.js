import React from "react";

import Navbar from "../components/Navbar";

function Contact (){
    return(
        <div id="pageWrapper">
            <Navbar />
            <div id="contactContent">
                <div id="contactLinks">
                    <h3>link based contact, socials etc.</h3>
                </div>
                <div id="contactText">
                    <h3>phone numbers, P.O. boxes</h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;