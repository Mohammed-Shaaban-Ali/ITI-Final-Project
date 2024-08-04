// src/Navbar.js
import React, { useState } from "react";
import logo from "../../assets/logo.png";

import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaAlignJustify, FaAlignRight } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav
      className="navbar navanation"
      style={location.pathname === "/" ? {} : { borderColor: "#E6E6E6" }}
    >
      <div className="navbar-content">
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <span className="logo-text">FashionForAll</span>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaAlignRight /> : <FaAlignJustify />}
        </button>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "var(--main-color)" : "",
                borderBottom: isActive ? "3px solid var(--main-color)" : "",
                paddingBottom: "6px",
              };
            }}
            className={"nav-link"}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => {
              return {
                color: isActive ? "var(--main-color)" : "",
                borderBottom: isActive ? "3px solid var(--main-color)" : "",
                paddingBottom: "6px",
              };
            }}
            className={"nav-link"}
          >
            Products
          </NavLink>
          <NavLink
            to="/Contact"
            style={({ isActive }) => {
              return {
                color: isActive ? "var(--main-color)" : "",
                borderBottom: isActive ? "3px solid var(--main-color)" : "",
                paddingBottom: "6px",
              };
            }}
            className={"nav-link"}
          >
            Contact
          </NavLink>
        </div>

        <div className={`nav-actions ${isMenuOpen ? "active" : ""}`}>
          <div className="search-container">
            <div className="search-icon">
              <FaSearch className="search-icon-small" />
            </div>
            <p className="search-button">Search</p>
          </div>
          <h4>{name}</h4>
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
