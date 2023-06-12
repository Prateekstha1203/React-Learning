import React from "react";
import { servicesList } from "./data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {servicesList.map((service) => {
          return (
            <article className="service" key={service.id}>
              <span className="service-icon">
                <i className={service.icon} />
              </span>
              <div className="service-info">
                <h4 className="service-title">{service.header}</h4>
                <p className="service-text">{service.content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
