import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7fafc",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "120px",
    fontWeight: "800",
    color: "#4a5568",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "#718096",
    marginBottom: "1.5rem",
  };

  const linkStyle = {
    padding: "0.5rem 1rem",
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "#667eea",
    borderRadius: "0.375rem",
    textDecoration: "none",
    transition: "all 0.2s ease-in-out",
  };

  const hoverStyle = {
    backgroundColor: "#5a67d8",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>404</h1>
        <p style={messageStyle}>Page Not Found</p>
        <Link href="/" style={{ ...linkStyle, ":hover": hoverStyle }}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
