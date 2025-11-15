import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeavyBreadcrum from "../HeavyEquipment/HeavyBreadcrum";
import HeavyServices from "../HeavyEquipment/HeavyServices";
const HeavyEquipment = () => {
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
    <HeavyBreadcrum/>
    <HeavyServices/>
    <Footer/>
    </div>
  );
};

export default HeavyEquipment;
