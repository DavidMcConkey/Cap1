import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div ClassName="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="../../header.png"
            alt="header_image"
          />
        </Link>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span>Dashboard</span>
        </Link>
        <Link to="/schedule" style={{ textDecoration: "none" }}>
          <span>Schedule</span>
        </Link>
        <Link to="/inbox" style={{ textDecoration: "none" }}>
          <span>Inbox</span>
        </Link>
        <Link to="/bookoffs" style={{ textDecoration: "none" }}>
          <span>Bookoffs</span>
        </Link>
      </div>
      <div className="headerRight">
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          <span>Sign Up</span>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span>Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
