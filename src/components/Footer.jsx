import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div
          className="footer-shape"
          style={{ backgroundImage: 'url(assets/img/logo.png)' }}
        />

        <div className="footer-widget">
          <div className="container">
            <div className="footer-widget-wrap pt-100 pb-80">
              <div className="row g-4">

                {/* About Section */}
                <div className="col-lg-5">
                  <div className="footer-widget-box about-us">
                    <a to="#" className="footer-logo">
                      <img src="assets/img/logo.jpg" className="img-fluid" alt="" />
                    </a>
                    <p className="mb-4 text-white mt-3">
                      Mountain Falcon Company delivers top-quality contracting, industrial,
                      trading, and manpower services across multiple divisions.
                    </p>
                  </div>
                </div>

                {/* Company Links */}
                <div className="col-6 col-lg-2">
                  <div className="footer-widget-box list">
                    <h4 className="footer-widget-title">Company</h4>
                    <ul className="footer-list">
                      <li><Link to="/overview"><i className="far fa-angle-double-right" /> Overview</Link></li>
                      <li><Link to="/why-choose"><i className="far fa-angle-double-right" /> Why Choose Us</Link></li>
                      <li><Link to="/quality"><i className="far fa-angle-double-right" /> Quality Policy</Link></li>
                      <li><Link to="/hse-policy"><i className="far fa-angle-double-right" /> HSE Policy</Link></li>
                      <li><Link to="/ceo"><i className="far fa-angle-double-right" /> CEO Message</Link></li>
                     
                    </ul>
                  </div>
                </div>

                {/* Services Links */}
                <div className="col-6 col-lg-2">
                  <div className="footer-widget-box list">
                    <h4 className="footer-widget-title">Services</h4>
                    <ul className="footer-list">
                      <li><Link to="/civil-services"><i className="far fa-angle-double-right" /> Civil Services</Link></li>
                      <li><Link to="/electrical-services"><i className="far fa-angle-double-right" /> Electrical Services</Link></li>
                      <li><Link to="/mechanical-services"><i className="far fa-angle-double-right" /> Mechanical Services</Link></li>
                     
                      <li><Link to="/firefighting-services"><i className="far fa-angle-double-right" /> Firefighting Services</Link></li>
                      <li><Link to="/fabrication"><i className="far fa-angle-double-right" /> Fabrication</Link></li>
                      
                    </ul>
                  </div>
                </div>

                {/* Divisions */}
                <div className="col-lg-3">
                  <div className="footer-widget-box list">
                    <h4 className="footer-widget-title">Our Divisions</h4>
                    <ul className="footer-list">
                      <li><Link to="/contract"><i className="far fa-angle-double-right" /> Contracting Division</Link></li>
                      <li><Link to="/scaffolding-division"><i className="far fa-angle-double-right" /> Scaffolding Division</Link></li>
                      <li><Link to="/equipment"><i className="far fa-angle-double-right" /> Heavy Equipment</Link></li>
                      <li><Link to="/general-trading-recruitment"><i className="far fa-angle-double-right" /> General Trading & Recruitment</Link></li>

                      {/* Scaffold sub links */}
                      <li><Link to="/gi-scaffold-tubes"><i className="far fa-angle-double-right" /> GI Scaffold Tubes</Link></li>
                     
                    
                     
                     
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p className="copyright-text text-white">
                  © Copyright <span id="date" /> 
                  <a to="#"> MOUNTAIN FALCON</a> All Rights Reserved.
                </p>
              </div>

              <div className="col-md-6 align-self-center">
                <ul className="footer-social">
                  <li><a to="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a to="#"><i className="fab fa-x-twitter" /></a></li>
                  <li><a to="#"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a to="#"><i className="fab fa-youtube" /></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
