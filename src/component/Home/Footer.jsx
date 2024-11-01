import React from "react";
import logoWhite from "./../../assets/images/mivlogo.png";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-3 col-sm-6">
              <a href="#">
                <img src={logoWhite} alt="Logo" width={100} height={80} />
              </a>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, hic!
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="ri-twitter-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-github-fill"></i>
                </a>
                <a href="#">
                  <i className="ri-dribbble-fill"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="mb-0 text-white">SERVICES</h5>
              <div className="line"></div>
              <ul>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">Web/App Development</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="mb-0 text-white">ABOUT</h5>
              <div className="line"></div>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="mb-0 text-white">CONTACT</h5>
              <div className="line"></div>
              <ul>
                <li>New York, NY 3300</li>
                <li>(414) 586 - 3017</li>
                <li>www.example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-auto">
              <p className="mb-0">© Copyright Mivtech. All Rights Reserved</p>
            </div>
            <div className="col-auto">
              <p className="mb-0">
                Designed with 💜 By <a href="">Mivtech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
