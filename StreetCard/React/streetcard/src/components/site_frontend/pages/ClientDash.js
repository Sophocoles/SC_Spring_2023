import React from "react";

import Navbar from "../components/Navbar";

function ClientDash() {
    return (
        <div className="pageWrapper">
           
            <div className="DashboardContent">
                <div className="appointmentCalender">
                    <p>This is for the calendar</p>
                </div>
                <div className="appStatus">
                    <p>This is for the applications</p>
                </div>
                <div className="jobApps">
                    <p>This is for the JOB applications</p>
                </div>
            </div>
        </div>
    );
}

export default ClientDash;