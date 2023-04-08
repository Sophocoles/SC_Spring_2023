import React from "react";

import Navbar from "../components/Navbar";

function Help (){
    var popCount;
    
    return(
        <div id="pageWrapper">
            
            <div id="helpContent">
                <h2>Homeless Population Count: {popCount}</h2>

                <div id="helpLinks">
                    <p>-donation links here-</p>
                </div>
            </div>
        </div>
    );
}

export default Help;