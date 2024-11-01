import React, { useEffect } from "react";
import { Home } from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar";

const App = () => {
  useEffect(() => {
    document.body.setAttribute("data-bs-spy", "scroll");
    document.body.setAttribute("data-bs-target", ".navbar");

    // Initialize ScrollSpy if available
    if (window.bootstrap && window.bootstrap.ScrollSpy) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: ".navbar",
      });
    } else {
      console.error("Bootstrap's ScrollSpy is not loaded.");
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
