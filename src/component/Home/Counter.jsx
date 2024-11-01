import React from "react";

const Counter = () => {
  return (
    <section id="counter" className="section-padding">
      <div className="container text-center">
        <div className="row g-4">
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <h1 className="text-white display-4">90,00+</h1>
            <h6 className="text-uppercase mb-0 text-white mt-3">
              Total Downloads
            </h6>
          </div>
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <h1 className="text-white display-4">58K+</h1>
            <h6 className="text-uppercase mb-0 text-white mt-3">
              Trusted Clients
            </h6>
          </div>
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            <h1 className="text-white display-4">5M+</h1>
            <h6 className="text-uppercase mb-0 text-white mt-3">
              Themes Designed
            </h6>
          </div>
          <div
            className="col-lg-3 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <h1 className="text-white display-4">100+</h1>
            <h6 className="text-uppercase mb-0 text-white mt-3">
              Team Members
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
