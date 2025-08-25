import React from "react";
import purpleflower from "../images/purpleflower.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About Flora</h2>
        <p>
          At Flora, we bring you the freshest flowers with love and care. Each
          bouquet is handpicked to ensure you get the best quality blooms.
        </p>
      </div>
      <div className="about-img">
        <img src={purpleflower} alt="Flora about" />
      </div>
    </section>
  );
};

export default About;
