import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ScaffoldingBreadcrum from "../Scaffolding/ScaffoldingBreadcrum";
import ScafflodingServices from "../Scaffolding/ScafflodingServices";
import Footer from "../components/Footer";
const Scaffolding = () => {
  useEffect(() => {
    if (window.jQuery) {
      console.log("✅ jQuery is loaded.");

      window.jQuery(document).ready(function () {
        console.log("✅ DOM ready, jQuery plugins can run now.");

        if (typeof window.initAnimations === "function") {
          window.initAnimations();
        }
      });
    } else {
      console.warn(
        "❌ jQuery not found. Make sure it's loaded in index.html correctly."
      );
    }
  }, []);

  return (
    <div style={{ overflow: "visible" }}>
      
    <Navbar/>
    <ScaffoldingBreadcrum/>
    <ScafflodingServices/>
    <Footer/>
    </div>
  );
};

export default Scaffolding;
