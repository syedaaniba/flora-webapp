import React from "react";
import bg from "../images/bg.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-text">
        <h2>Fresh Flowers Delivered</h2>
        <p>Brighten your day with Flora’s finest collection.</p>
        <button className="btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Hero;
