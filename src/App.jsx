import React, { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar";
import Counter from "./component/Home/Counter";
import Footer from "./component/Home/Footer";

const App = () => {
  useEffect(() => {
    // Set up ScrollSpy
    document.body.setAttribute("data-bs-spy", "scroll");
    document.body.setAttribute("data-bs-target", ".navbar");

    // Initialize Bootstrap ScrollSpy if available
    if (window.bootstrap && window.bootstrap.ScrollSpy) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: ".navbar",
        offset: 50, // Adjust offset if needed for your navbar height
      });
    } else {
      console.error("Bootstrap's ScrollSpy is not loaded.");
    }
  }, []);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
