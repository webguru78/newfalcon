import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="header">
        {/* header top */}
      
        {/* header top end */}

        {/* navbar */}
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  src="assets/img/mfc.png"
                  alt="Mountain Falcon Company"
                  
                />
              </Link>

              <div className="mobile-menu-right">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  aria-label="Toggle navigation"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>

              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <a to="/" className="offcanvas-brand" id="offcanvasNavbarLabel">
                    <img src="assets/img/mfc.png" alt="Mountain Falcon Company" />
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i className="far fa-xmark" />
                  </button>
                </div>

                <div className="offcanvas-body gap-xl-4">
                  <ul className="navbar-nav justify-content-end flex-grow-1">
                    {/* Home */}
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>

                    {/* About Us with Dropdown */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                      >
                        About Us
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" to="/overview">
                            <i className="far fa-info-circle" /> Overview
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/why-choose">
                            <i className="far fa-star" /> Why Choose Us
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/quality">
                            <i className="far fa-certificate" /> Quality Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/hse-policy">
                            <i className="far fa-shield-check" /> HSE Policy
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/ceo">
                            <i className="far fa-user-tie" /> CEO Message
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/organization">
                            <i className="far fa-sitemap" /> Organization Chart
                          </Link>
                        </li>
                      
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        to="#"
                        data-bs-toggle="dropdown"
                      >
                        Our Division
                      </a>
                      <ul className="dropdown-menu fade-down">
                        <li>
                          <Link className="dropdown-item" to="/contract">
                            <i className="far fa-info-circle" /> Contracting Division
                          </Link>
                        </li>
                       <Link className="dropdown-item" to="/scaffolding-division">
  <i className="far fa-info-circle" /> Scaffolding Division
</Link>

                      
                        <li>
                        <Link className="dropdown-item" to="/equipment">
  <i className="far fa-info-circle" /> Heavy Equipment
</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/general-trading-recruitment">
                            <i className="far fa-shield-check" /> General Trading & Recruitment
                          </Link>
                        </li>
                       
                      
                      </ul>
                    </li>

                    {/* Services */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/services">Services</Link>
                    </li>

                    {/* Company Profile */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/company">Company Profile</Link>
                    </li>

                    {/* Our Work */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/our-work">Our Work</Link>
                    </li>

                    {/* Clients */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/client">Clients</Link>
                    </li>

                    {/* Contact */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>

                  {/* nav-right */}
                 
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* navbar end*/}
      </header>
    </div>
  )
}

export default Navbar
