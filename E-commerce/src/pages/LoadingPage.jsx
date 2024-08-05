import React from "react";

const LoadingComponent = () => {
  const loadingStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  };

  const spinnerStyle = {
    width: "50px",
    height: "50px",
    border: "8px solid #ccc",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  };

  const textStyle = {
    color: "#333",
    fontSize: "18px",
  };

  return (
    <div style={loadingStyle}>
      <div style={spinnerStyle}></div>
      <p style={textStyle}>Loading...</p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingComponent;
