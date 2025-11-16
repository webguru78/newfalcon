import React from 'react'
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="gallery-area py-100">
        <div className="container">
          
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="site-heading text-center wow fadeInDown" data-wow-delay=".25s">
                <span className="site-title-tagline">
                  <i className="far fa-helmet-safety" /> Our Projects
                </span>
                <h2 className="site-title">
                  Let's Check Our Photo <span>Projects</span>
                </h2>
                <div className="heading-divider" />
              </div>
            </div>
          </div>

          {/* GALLERY GRID */}
          <div className="row g-4 popup-gallery">

            {[1, 2, 3, 4, 5, 6, 7,8].map((num, index) => (
              <div className="col-md-3" key={num}>
                <div
                  className="gallery-item wow fadeInUp"
                  data-wow-delay={`${0.25 + index * 0.05}s`}
                >
                  <div className="gallery-img">
                    <img src={`/assets/img/about/${num}.jpeg`} alt={`Gallery ${num}`} />
                  </div>

                  <div className="gallery-content">
                    <a
                      className="popup-img gallery-link"
                      href={`/assets/img/about/${num}.jpeg`}
                    >
                      <i className="fal fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
