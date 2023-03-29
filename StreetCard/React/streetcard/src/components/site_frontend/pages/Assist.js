import React from "react";

import Navbar from "../components/Navbar";

function Assist (){
    return(
        <div id="pageWrapper">
            <Navbar />
            <div id="assistContent">
                <div id="websiteHelp">
                    <h2>Website FAQ</h2>
                    <h3>- Question -</h3>
                    <p>ANSWER</p>
                </div>
                <div id="cardIssues">
                    <h2>Card FAQ</h2>
                    <h3>- Question -</h3>
                    <p>ANSWER</p>
                </div>
            </div>
        </div>
    );
}

export default Assist;