import React from "react";
import aboutImage from "./../../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">About us</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than
                creating more lorem ipsum. We have crazy skills to showcase!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6" data-aos="fade-down" data-aos-delay="50">
            <img src={aboutImage} alt="About Elixir" className="img-fluid" />
          </div>
          <div data-aos="fade-down" data-aos-delay="150" className="col-lg-5">
            <h1>About Mivtechnology</h1>
            <p className="mt-3 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quo
              reiciendis ad.
            </p>
            <div className="d-flex pt-4 mb-3">
              <div className="iconbox me-4">
                <i className="ri-mail-send-fill"></i>
              </div>
              <div>
                <h5>We are Awesome</h5>
                <p>
                  Consectetur adipisicing elit. Corporis nesciunt aut
                  temporibus!
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="iconbox me-4">
                <i className="ri-user-5-fill"></i>
              </div>
              <div>
                <h5>We are Awesome</h5>
                <p>
                  Consectetur adipisicing elit. Corporis nesciunt aut
                  temporibus!
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="iconbox me-4">
                <i className="ri-rocket-2-fill"></i>
              </div>
              <div>
                <h5>We are Awesome</h5>
                <p>
                  Consectetur adipisicing elit. Corporis nesciunt aut
                  temporibus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
