import React from "react";
import HomeModule from "../../component/Home/HomeModule";
import About from "../../component/Home/About";
import Services from "../../component/Home/services";

export const Home = () => {
  return (
    <div>
      <HomeModule />
      <About />
      <Services />
    </div>
  );
};
