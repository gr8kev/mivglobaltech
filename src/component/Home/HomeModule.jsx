import React from "react";

const HomeModule = () => {
  return (
    <div>
      <section
        id="hero"
        className="min-vh-100 d-flex align-items-center text-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1
                data-aos="fade-left"
                className="text-uppercase text-white fw-semibold display-1"
              >
                welcome to mivtech
              </h1>
              <h5 className="text-white mt-3 mb-4" data-aos="fade-right">
                WE ARE A TEAM OF TALENTED DESIGNERS MAKING WEBSITES WITH THE
                BEST TECHNOLOGY
              </h5>
              <div data-aos="fade-up" data-aos-delay="50">
                <a href="#" className="btn btn-brand me-2">
                  Get Started
                </a>
                <a href="#" className="btn btn-light ms-2">
                  Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeModule;
