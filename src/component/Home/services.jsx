import React from "react";
import {
  RiPenNibFill,
  RiStackFill,
  RiRuler2Fill,
  RiPieChart2Fill,
  RiCodeBoxLine,
  RiUser2Fill,
} from "react-icons/ri";

const Services = () => {
  return (
    <section id="services" className="section-padding border-top">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Awesome Services</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than more
                lorem ipsum and showcase our skills.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 text-center">
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiPenNibFill size={40} />
              </div>
              <h5 className="mt-4 mb-3">UX Design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="250"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiStackFill size={40} />
              </div>
              <h5 className="mt-4 mb-3">UI Design</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="350"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiRuler2Fill size={40} />
              </div>
              <h5 className="mt-4 mb-3">Digital Marketing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="450"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiPieChart2Fill size={40} />
              </div>
              <h5 className="mt-4 mb-3">Website Development</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="550"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiCodeBoxLine size={40} />
              </div>
              <h5 className="mt-4 mb-3">Android & Ios Development</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-sm-6"
            data-aos="fade-down"
            data-aos-delay="650"
          >
            <div className="service theme-shadow p-lg-5 p-4">
              <div className="iconbox">
                <RiUser2Fill size={40} />
              </div>
              <h5 className="mt-4 mb-3">Social Media Marketing</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                fugiat sunt distinctio?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
