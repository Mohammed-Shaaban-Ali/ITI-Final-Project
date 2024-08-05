import React from "react";

const LoadingComponent = () => {
  const styles = `
    .loadingContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .custom-loader {
      width: 120px;
      height: 22px;
      border-radius: 20px;
      color: #3a36b6;
      border: 2px solid;
      position: relative;
    }
    
    .custom-loader::before {
      content: "";
      position: absolute;
      margin: 2px;
      inset: 0 100% 0 0;
      border-radius: inherit;
      background: #3a36b6;
      animation: p6 2s infinite;
    }
    
    @keyframes p6 {
      100% {
        inset: 0;
      }
    }
  `;

  return (
    <div className="loadingContainer">
      <div className="custom-loader"></div>
      <style>{styles}</style>
    </div>
  );
};

export default LoadingComponent;
