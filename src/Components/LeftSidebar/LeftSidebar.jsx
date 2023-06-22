import React from "react";
import { NavLink } from "react-router-dom";
import globe from "../../assets/Globe.svg";
import "./LefSidebar.css";

export default function LeftSidebar() {
  return (
    <div
      className="left-sidebar"
    >
      <nav className="side-nav">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={globe} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Tags</p>
            </NavLink>
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "40px" }}
            >
              <p>Users</p>
            </NavLink>
        </div>
      </nav>
    </div>
  );
}
