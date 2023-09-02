import React from "react";
import "./Possibility.css";
import Possimg from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt__poss section__padding" id="possibility">
      <div className="gpt__poss-img">
        <img src={Possimg} alt="possibilityImage" />
      </div>
      <div className="gpt__poss-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
