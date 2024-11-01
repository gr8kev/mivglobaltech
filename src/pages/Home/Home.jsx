import React from "react";
import HomeModule from "../../component/Home/HomeModule";
import About from "../../component/Home/About";
import Services from "../../component/Home/services";
import Counter from "../../component/Home/Counter";
import Portfolio from "../../component/Home/Portfolio";
import Testimonials from "../../component/Home/Testimonials";
import Team from "../../component/Home/Team";
import Contact from "../../component/Home/Contact";
import Blog from "../../component/Home/Blog";

export const Home = () => {
  return (
    <div>
      <HomeModule />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Blog />
    </div>
  );
};
