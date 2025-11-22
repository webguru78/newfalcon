import React from "react";

// IMPORT NAVBAR & FOOTER
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// IMPORT PAGE SECTIONS
import RecruitmentBreadcrum from "../RecruitmentComponents/RecruitmentBreadcrum";
import RecruitmentServices from "../RecruitmentComponents/RecruitmentServices";

const Recruitment = () => {
  return (
    <>
      <Navbar />

      <RecruitmentBreadcrum />
      <RecruitmentServices />

      <Footer />
    </>
  );
};

export default Recruitment;
