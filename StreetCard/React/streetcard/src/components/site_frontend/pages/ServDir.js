import React from "react";

import Navbar from "../components/Navbar";

function ServDir(){
    return(
        <div className="pageWrapper">
            <Navbar />
            <div className="dirContent">
                <div className="dirMap">
                    <h2>INSERT MAP HERE</h2>
                </div>
                <div className="dirProviders">
                    <div className="sectionHeader">
                        <h2>List of Providers in the Area</h2>
                    </div>
                    <div className="sectionContent">
                        <p>1. Provider 1</p><br></br>
                        <p>2. Provider 2</p><br></br>
                        <p>3. Provider 3</p><br></br>
                        <p>4. Provider 4</p><br></br>
                        <p>5. Provider 5</p><br></br>
                        <p>6. Provider 6</p><br></br>
                    </div>
                </div>
                <div className="dirServices">
                    <div className="sectionHeader">
                        <h3>Types of Services</h3>
                    </div>
                    <div className="sectionContent">
                        <p>Links:<br></br>
                            Shelters:<br></br>
                            Drop-in Shelters:<br></br>
                            Soup Kitchens:<br></br>
                            Food Pantries:<br></br>
                            Medical Clinics:<br></br>
                        </p>
                    </div>
                </div>
                <div className="dirVolunteers">
                    <p>
                        this is for the volunteer directory
                    </p>
                </div>
                <div className="dirOutreach">
                    <h3>Preferred Methods of Outreach</h3>
                    <p>
                        -insert methods-
                    </p>
                </div>
                <div className="dirPrevention">
                    <h3>Homeless Prevention</h3>
                    <p>
                        -insert information-
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default ServDir;