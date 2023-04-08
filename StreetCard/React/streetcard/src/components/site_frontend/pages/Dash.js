import React from "react";
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Dash() {
    return (
        <div className="pageWrapper">
            
            <div className="DashboardContent">
                <div className="providerLogin">
                    <form>
                        <p>
                            Im the provider login space
                        </p>
                        <Link className="login" to="http://127.0.0.1:8000/">Login or Signup</Link>
                    </form>
                </div>
                <div className="clientLogin">
                    <form>
                        <p>
                            Im the client login space
                        </p>
                        <Link className="login" to="http://127.0.0.1:8000/">Login or Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dash;