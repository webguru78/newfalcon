import React from "react";
import "./ChooseUsSection.css";

const ChooseUsSection = () => {
  return (
    <section className="chooseus-section py-5">
      <div className="container text-center">
        {/* --- Heading --- */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="chooseus-heading">
              Why <span className="highlight">Choose Us</span>?
            </h2>
            <p className="chooseus-subtext">
              We bring together expertise, innovation, and reliability to deliver
              solutions that exceed expectations — every single time.
            </p>
          </div>
        </div>

        {/* --- Features --- */}
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="chooseus-card">
              <div className="icon-wrapper">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h5>Innovative Solutions</h5>
              <p>
                Our creative team ensures every project is tailored with
                cutting-edge ideas and modern design principles.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="chooseus-card">
              <div className="icon-wrapper">
                <i className="fas fa-users-cog"></i>
              </div>
              <h5>Professional Team</h5>
              <p>
                A group of highly skilled professionals dedicated to precision,
                collaboration, and delivering perfection in every detail.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="chooseus-card">
              <div className="icon-wrapper">
                <i className="fas fa-handshake"></i>
              </div>
              <h5>Reliable Partnership</h5>
              <p>
                We prioritize transparency, trust, and long-term relationships to
                ensure your project’s success from start to finish.
              </p>
            </div>
          </div>
        </div>

        {/* --- Bottom Tagline --- */}
        <div className="row mt-5">
          <div className="col-lg-10 mx-auto">
            <p className="chooseus-footer-text">
              Building excellence with innovation and trust — your vision, our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
