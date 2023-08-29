import React from "react";
import "./Feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt__feature-container__feature">
      <div className="gpt__feature-container__feature-title">
        <div />
        <h1> {title}</h1>
      </div>
      <div className="gp3__features-container_features-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
