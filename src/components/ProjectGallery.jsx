import React, { useState } from "react";
import "./ProjectGallery.css";

const projects = [
  {
    title: "SHQAIQ TO BISHA",
    images: [
      "/assets/img/about/1.jpeg",
      "/assets/img/about/2.jpeg",
      "/assets/img/about/3.jpeg",
      "/assets/img/about/4.jpeg",
      "/assets/img/about/5.jpeg",
      "/assets/img/about/6.jpeg",
      "/assets/img/about/7.jpeg",
    ]
  },
  {
    title: "Qudmi to Najran Project",
    images: [
      "/assets/img/team/01.jpeg",
      "/assets/img/team/02.jpeg",
      "/assets/img/team/03.jpeg",
      "/assets/img/team/04.jpeg",
      "/assets/img/team/05.jpeg",
      "/assets/img/team/06.jpeg",
      "/assets/img/team/07.jpeg",
      "/assets/img/team/08.jpeg",
      "/assets/img/team/09.jpeg",
      "/assets/img/team/10.jpeg",
      "/assets/img/team/13.jpeg",
      "/assets/img/team/12.jpeg",
    ]
  },
  {
    title: "Underground Cable Project",
    images: [
      "/assets/img/team/c1.jpeg",
      "/assets/img/team/c2.jpeg",
      "/assets/img/team/c3.jpeg",
      "/assets/img/team/c4.jpeg",
      "/assets/img/team/c5.jpeg",
      "/assets/img/team/c6.jpeg",
      "/assets/img/team/c7.jpeg",
    
    ]
  },
  {
    title: "Stonewall and Raprap Project",
    images: [
      "/assets/img/team/s1.jpeg",
      "/assets/img/team/s2.jpeg",
      "/assets/img/team/s3.jpeg",
      "/assets/img/team/s4.jpeg",
      "/assets/img/team/s5.jpeg",
      "/assets/img/team/s6.jpeg",
      "/assets/img/team/s7.jpeg",
      "/assets/img/team/s8.jpeg",
      "/assets/img/team/s9.jpeg",
      "/assets/img/team/s10.jpeg",
      "/assets/img/team/s11.jpeg",
      "/assets/img/team/s12.jpeg",
    
    ]
  },
  {
    title: "Pipeline Project Rasul Al Kher to Riyadh",
    images: [
       "/assets/img/team/p1.jpeg",
       "/assets/img/team/p2.jpeg",
       "/assets/img/team/p3.jpeg",
       "/assets/img/team/p4.jpeg",
    ]
  },
  {
    title: "Our Substation Project",
    images: [
     "/assets/img/team/q1.jpeg",
      "/assets/img/team/q2.jpeg",
      "/assets/img/team/q3.jpeg",
      "/assets/img/team/q4.jpeg",
      "/assets/img/team/q5.jpeg",
      "/assets/img/team/q6.jpeg",
      "/assets/img/team/q7.jpeg",
      "/assets/img/team/q8.jpeg",
      "/assets/img/team/q9.jpeg",
      "/assets/img/team/q10.jpeg",
      "/assets/img/team/q11.jpeg",
      "/assets/img/team/q12.jpeg",
    ]
  },
  {
    title: "Our Store Development Project",
    images: [
      "/assets/img/about/4.jpeg",
      "/assets/img/about/5.jpeg",
      "/assets/img/about/6.jpeg",
      "/assets/img/about/7.jpeg",
      "/assets/img/about/8.jpeg",
      "/assets/img/about/9.jpeg",
      "/assets/img/about/1.jpeg",
      "/assets/img/about/2.jpeg"
    ]
  }
];

const ProjectGallery = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="portfolio-gallery-section">
        <div className="container">
          {/* Header */}
          <div className="portfolio-header">
            <div className="portfolio-badge">Our Portfolio</div>
            <h1 className="portfolio-main-title">Featured Projects</h1>
            <p className="portfolio-description">
              Explore our diverse range of successfully completed infrastructure and development projects
            </p>
          </div>

          {/* Project Tabs */}
          <div className="portfolio-tabs-wrapper">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`portfolio-tab-button ${activeTab === idx ? 'portfolio-tab-active' : ''}`}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Gallery Container */}
          <div className="portfolio-content-area">
            <div className="portfolio-title-section">
              <h2 className="portfolio-project-title">{projects[activeTab].title}</h2>
              <div className="portfolio-title-divider"></div>
            </div>

            {/* Images Grid */}
            <div className="row g-4">
              {projects[activeTab].images.map((image, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="portfolio-image-card">
                    <div className="portfolio-img-wrapper">
                      <img
                        src={image}
                        alt={`${projects[activeTab].title} - Image ${idx + 1}`}
                        className="portfolio-img"
                      />
                      <div className="portfolio-img-overlay">
                        <div className="portfolio-zoom-icon">
                          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;