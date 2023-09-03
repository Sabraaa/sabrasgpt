import React from "react";
import "./Features.css";
import Feature from "../../components/feature/Feature";
import { useCreateFeature } from "../../hooks/useCreateFeature";

const Features = () => {
  const { featuresData } = useCreateFeature();

  return (
    <div className="gpt__features section__padding" id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt__features-containers">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
