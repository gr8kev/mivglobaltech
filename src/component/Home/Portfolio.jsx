import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import project1 from "./../../assets/images/person-1.jpg";
import project2 from "./../../assets/images/project-4.jpg";
import project3 from "./../../assets/images/project-5.jpg";
import project4 from "./../../assets/images/project-2.jpg";
import project5 from "./../../assets/images/project-3.jpg";
import project6 from "./../../assets/images/project-6.jpg";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const portfolioItems = [
    { src: project1, delay: 150 },
    { src: project2, delay: 150 },
    { src: project3, delay: 250 },
    { src: project4, delay: 250 },
    { src: project5, delay: 350 },
    { src: project6, delay: 350 },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <div className="section-title">
              <h1 className="display-4 fw-semibold">Our Portfolio</h1>
              <div className="line"></div>
              <p>
                We love to craft digital experiences for brands rather than just
                lorem ipsum text.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              data-aos="fade-down"
              data-aos-delay={item.delay}
            >
              <div className="portfolio-item image-zoom">
                <div className="image-zoom-wrapper">
                  <img src={item.src} alt={`Project ${index + 1}`} />
                </div>
                <a href={item.src} data-fancybox="gallery" className="iconbox">
                  <i className="ri-search-2-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
