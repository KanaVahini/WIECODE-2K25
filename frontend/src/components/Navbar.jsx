import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <h2 className="logo">Authentify</h2>
        <ul className="nav-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">login</a></li>
          <li><a href="#">home</a></li>
          <li><a href="#">Features</a></li>
        </ul>
        <button className="nav-btn">Sign Up</button>
      </div>
    </nav>
  );
};
export default Navbar;  