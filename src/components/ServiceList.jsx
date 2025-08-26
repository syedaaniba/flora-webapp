import React from "react";
import service1 from "../images/service1.jpg";
import service2 from "../images/service2.jpg";
import service3 from "../images/service3.jpg";

const ServiceList = () => {
  const services = [
    { id: 1, title: "Fresh Bouquets", img: service1 },
    { id: 2, title: "Custom Arrangements", img: service2 },
    { id: 3, title: "Fast Delivery", img: service3 },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
