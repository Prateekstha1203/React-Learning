import React from "react";
import { tourList } from "./data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tourList.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.img} className="tour-img" alt="" />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.tourTitle}</h4>
                </div>
                <p>{tour.tourContent}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map" />
                    </span>
                    {tour.location}
                  </p>
                  <p>{tour.duration} days</p>
                  <p>from ${tour.price}</p>
                </div>
              </div>
            </article>
          );
        })}
       
      </div>
    </section>
  );
};

export default Tours;
