import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images for testimonials
import avatar1 from "./../../assets/images/avatar-1.jpg";
import avatar2 from "./../../assets/images/avatar-2.jpg";
import avatar3 from "./../../assets/images/avatar-3.jpg";
import avatar4 from "./../../assets/images/avatar-4.jpg";
import avatar5 from "./../../assets/images/avatar-5.jpg";
import avatar6 from "./../../assets/images/avatar-6.jpg";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const testimonials = [
    {
      img: avatar1,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 150,
    },
    {
      img: avatar2,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 250,
    },
    {
      img: avatar3,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 350,
    },
    {
      img: avatar4,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 450,
    },
    {
      img: avatar5,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 550,
    },
    {
      img: avatar6,
      name: "Dianne Russell",
      role: "UX Architect",
      feedback:
        "Amazing theme ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum animi rerum ipsam impedit dicta voluptatem.",
      delay: 650,
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Testimonials</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than crap
                and more lorem ipsums and do crazy skills
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-5 gx-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay={testimonial.delay}
            >
              <div className="review">
                <div className="review-head p-4 bg-white theme-shadow">
                  <div className="text-warning">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <p>{testimonial.feedback}</p>
                </div>
                <div className="review-person mt-4 d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src={testimonial.img}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>{testimonial.name}</h5>
                    <small>{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
