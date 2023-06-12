import React from "react";
import "./TourWebsite.css";
import imgLogo from "./images/logo.svg";
import NavComponent from "./NavComponent";
import IconComponent from "./IconComponent";
const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center container">
          <div className="nav-header">
            <img src={imgLogo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>

          <NavComponent parentClassName="nav-links" childClassName = "nav-link"/>
          <IconComponent parentClassName="nav-icons" childClassName="nav-icon" />
          
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
