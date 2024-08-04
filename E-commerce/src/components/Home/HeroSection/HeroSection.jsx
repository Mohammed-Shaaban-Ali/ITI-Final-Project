// src/HeroSection.js
import React from "react";
import "./HeroSection.css";
import hero from "../../../assets/hero.svg";
import rightImage from "../../../assets/80.png";
import { FaCircleCheck } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-section home">
      <div className="container hero ">
        <div className="hero-info leftanation">
          <div className="hero-badges">
            <span className="badge">
              {" "}
              <FaCircleCheck className="hero-icon" /> Free Register
            </span>
            <span className="badge">
              {" "}
              <FaCircleCheck className="hero-icon" /> Great Service
            </span>
            <span className="badge">
              {" "}
              <FaCircleCheck className="hero-icon" /> Easy payment
            </span>
          </div>
          <h1 className="hero-title">
            Getting the best and latest style has never <br />
            <span className="highlight">been easier!</span>
          </h1>
          <p className="hero-subtitle">
            <strong>FashionForAll</strong> is a platform that helps to make
            fashion accessible to all. It brings fashion to your doorstep!
          </p>
          <div className="hero-buttons">
            <button className="button" style={{ padding: "16px 40px" }}>
              Shop collections
            </button>
            <button className="watch-button">
              <FaYoutube className="watch-icon" /> Watch reviews
            </button>
          </div>
        </div>
        <div className="hero-images rightanation">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <img className="rightImage" src={rightImage} alt="rightImage" />
    </section>
  );
};

export default HeroSection;
