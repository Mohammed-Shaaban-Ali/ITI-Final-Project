import React, { useState } from "react";
import logo from "../../assets/logo.png";

import "./MainNavbar.css";
import { FaSearch } from "react-icons/fa";
import { FaAlignJustify, FaAlignRight } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const MainNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const name = localStorage.getItem("name");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar navanation">
      <div
        className="navbar-content"
        style={location.pathname === "/" ? {} : { borderColor: "#E6E6E6" }}
      >
        <div className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
          </div>
          <span className="logo-text">FashionForAll</span>
        </div>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaAlignRight /> : <FaAlignJustify />}
        </button>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "var(--main-color)" : "",
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              paddingBottom: "6px",
            })}
            className={"nav-link"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="/products"
            style={({ isActive }) => ({
              color: isActive ? "var(--main-color)" : "",
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              paddingBottom: "6px",
            })}
            className={"nav-link"}
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setIsMenuOpen(false)}
            to="/Contact"
            style={({ isActive }) => ({
              color: isActive ? "var(--main-color)" : "",
              borderBottom: isActive ? "3px solid var(--main-color)" : "",
              paddingBottom: "6px",
            })}
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
          <button className="button logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
