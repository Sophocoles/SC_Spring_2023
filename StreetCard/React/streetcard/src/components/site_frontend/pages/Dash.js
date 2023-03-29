import React from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Dash() {
    return (
        <div className="pageWrapper">
            <Navbar />
            <div className="DashboardContent">
                <div className="providerLogin">
                    <form>
                        <p>
                            Im the provider login space
                        </p>
                        <Link className="login" to="/providerDash">Login</Link>
                    </form>
                </div>
                <div className="clientLogin">
                    <form>
                        <p>
                            Im the client login space
                        </p>
                        <Link className="login" to="/clientDash">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dash;