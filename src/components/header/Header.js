import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
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
        <Link to="/sign-out" style={{ textDecoration: "none" }}>
          <span>Sign-Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
