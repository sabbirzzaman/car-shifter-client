import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="overlay">
          <div className="hero-content">
            <h1>Find the suitable spare parts for your car!</h1>
            <p>
              We are restoring a vehicle to it's original form after it's been
              involved in an accident.
            </p>
            <a href="#parts" className="btn">
              Show All Parts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
