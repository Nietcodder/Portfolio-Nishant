import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="container">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/Experience" className={({ isActive }) => (isActive ? "active" : "")}>
            Experience
          </NavLink>
        </li>
     
        <li>
          <NavLink to="/Certificate" className={({ isActive }) => (isActive ? "active" : "")}>
            Certificate
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
