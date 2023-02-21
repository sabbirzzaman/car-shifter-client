import React from "react";
import "./Loader.css";

const Loader = ({ height }) => {
  return (
    <div style={{ height: height || "100vh" }} className="loader-container">
      <div className="loadingio-spinner-gear-g8x2zlvjauc">
        <div className="ldio-dr67gizi0hh">
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
