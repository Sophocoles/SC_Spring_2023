import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../django/auth/login/LoginActions';

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/about");
  };

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

        {auth.user?.userData ? (
            <>
                <span className="user-name">{auth.user.userData.first_name}</span>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
            ) : (
            <Link className="links" to="/login">Login / Signup</Link>
            )}
      </div>
    </nav>
  );
};

export default Navbar;
