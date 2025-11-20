import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';

const FittingsService = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = document.querySelectorAll('.service-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { id: 'excavation', title: 'Backfilling & Excavation', image: '/assets/img/back.jpg' },
    { id: 'building', title: 'Industrial Building', image: '/assets/img/Building.jpg' },
    { id: 'fencing', title: 'Fencing Solutions', image: '/assets/img/Fencing.jpg' },
    { id: 'foundation', title: 'Foundation Works', image: '/assets/img/Foundation.jpg' },
    { id: 'asphalt', title: 'Asphalt & Road Marking', image: '/assets/img/Asphalt.jpg' }
  ];

  const recentProjects = [
    { title: 'Commercial Complex Construction', date: 'Nov 2024', image: '/assets/img/Building.jpg' },
    { title: 'Highway Asphalt & Marking Project', date: 'Oct 2024', image: '/assets/img/Asphalt.jpg' },
    { title: 'Industrial Foundation Development', date: 'Sep 2024', image: '/assets/img/Foundation.jpg' }
  ];

  // Internal CSS styles for tables
  const tableStyles = {
    specificationsSection: {
      margin: '40px 0',
      padding: '30px',
      background: '#f8f9fa',
      borderRadius: '12px',
      border: '1px solid #e0e0e0'
    },
    specHeading: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      paddingBottom: '12px',
      borderBottom: '3px solid #3498db'
    },
    specTableWrapper: {
      overflowX: 'auto',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      marginBottom: '30px'
    },
    specTable: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '0'
    },
    specRow: {
      borderBottom: '1px solid #e8e8e8',
      transition: 'background-color 0.2s ease'
    },
    specLabel: {
      padding: '16px 20px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#34495e',
      width: '45%',
      backgroundColor: '#f8f9fa'
    },
    specValue: {
      padding: '16px 20px',
      fontSize: '15px',
      color: '#2c3e50',
      fontWeight: '500',
      width: '55%'
    }
  };

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-grid">
          <div className="blog-main">
            <div className="hero-image">
              <img src="/assets/img/sp4.jpg" alt="Scaffold Fittings Services" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: "white" }}>
                  Scaffold Fittings Services
                </h1>
                <p style={{ fontSize: '18px', opacity: 0.9, color: "white" }}>
                  Building Tomorrow's Infrastructure Today
                </p>
              </div>
            </div>

            <div className="blog-meta">
              <div className="meta-left">
                <div className="meta-item">
                  <User size={18} />
                  <span>Mountain Falcon</span>
                </div>
                <div className="meta-item">
                  <Calendar size={18} />
                  <span>November 2024</span>
                </div>
              </div>
              <button className="share-btn">
                <Share2 size={18} />
                Share
              </button>
            </div>

            <h1 className="blog-title">Comprehensive Scaffold Fittings by Mountain Falcon</h1>
            
            <p className="intro-text">
              In the field of Scaffold Fittings Services, MOUNTAIN FALCON COMPANY stands as a trusted leader, recognized for its unmatched technical expertise, premium-quality materials, and unwavering commitment to safety and reliability. Our certified and highly trained team specializes in providing complete scaffolding solutions—including design, supply, installation, inspection, and maintenance—ensuring comprehensive and compliant safety coverage across commercial, residential, and industrial sectors.
            </p>
            
            <p className="intro-text">
              We deliver end-to-end scaffolding solutions tailored to the unique requirements of each project. From the precise supply of high-grade Scaffold Fittings tubes meeting international standards like EN 10219 and BS 1139 / EN 39, to complete scaffolding systems with couplers, boards, and accessories, every component is engineered to meet international codes and safety standards. Our scaffolding solutions provide maximum load-bearing capacity, structural integrity, and worker safety for projects of all scales.
            </p>

            <div className="service-section" id="building">
              <h2 className="service-title">Scaffold Fittings Services & Technical Specifications</h2>
              
              <div className="service-image-wrapper">
                <img src="/assets/img/sp3.jpg" alt="Scaffold Fittings" />
              </div>
              
              <p className="service-text">
                With our extensive industrial experience, MOUNTAIN FALCON COMPANY is dedicated to delivering exceptional-quality Scaffold Fittings Services tailored to meet the highest standards of safety, durability, and structural integrity. Our scaffolding solutions are carried out by highly skilled professionals using premium-grade galvanized steel tubes and advanced engineering techniques to ensure superior performance and compliance with international standards.
              </p>
              
              <p className="service-text">
                We specialize in providing state-of-the-art Scaffold Fittings tubes that meet rigorous testing requirements including tensile tests, yield tests, and flattening tests. Our scaffolding systems are designed to effectively support construction and industrial projects, providing maximum load-bearing capacity and reliability even under demanding conditions. Each tube is manufactured to precise specifications with controlled thickness tolerance and embossed with standard certifications for quality assurance.
              </p>

              {/* Scaffold Fittings Tubes Technical Specifications */}
              <div style={tableStyles.specificationsSection}>
                <h3 style={tableStyles.specHeading}>
                  Scaffold Fittings Tube EN 10219 Standard Embossed
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Nominal Outside Diameter</td>
                        <td style={tableStyles.specValue}>48.3 MM</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Nominal Wall Thickness</td>
                        <td style={tableStyles.specValue}>3.20 mm</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Specification</td>
                        <td style={tableStyles.specValue}>EN10219 in accordance with ASTM A 370 & 500</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>21.35 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Theoretical Thickness Tolerance</td>
                        <td style={tableStyles.specValue}>+/- 6%</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Type of Testing & Method</td>
                        <td style={tableStyles.specValue}>Tensile test with yield and Flattening test</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Yield Load</td>
                        <td style={tableStyles.specValue}>16.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Tension Load</td>
                        <td style={tableStyles.specValue}>18.80 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{...tableStyles.specHeading, marginTop: '40px'}}>
                  Scaffold Fittings Tube BS 1139 / EN 39 Standard Embossed
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Nominal Outside Diameter</td>
                        <td style={tableStyles.specValue}>48.3 mm</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Nominal Wall Thickness</td>
                        <td style={tableStyles.specValue}>4.00 mm</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Type of Testing & Method</td>
                        <td style={tableStyles.specValue}>Tensile test with yield and Flattening test</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Specification</td>
                        <td style={tableStyles.specValue}>BS1139 Part 1: Section 1.1 in accordance with ASTM A 370 & 500</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Theoretical Weight</td>
                        <td style={tableStyles.specValue}>25.70 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Thickness Tolerance</td>
                        <td style={tableStyles.specValue}>+/- 6%</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Yield Load</td>
                        <td style={tableStyles.specValue}>20.90 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Tension Load</td>
                        <td style={tableStyles.specValue}>23.70 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Couplers and Clamps Section */}
              <h2 className="service-title" style={{ marginTop: '50px' }}>Scaffolding Couplers & Clamps</h2>
              
              <p className="service-text">
                Mountain Falcon Company provides a comprehensive range of high-quality scaffolding couplers and clamps, engineered to meet international standards and ensure maximum safety and reliability. Our products are hot-dip galvanized for superior corrosion resistance and long-term durability in all weather conditions.
              </p>

              {/* Double Coupler */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d1.jpg" alt="Double Coupler" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Double Coupler D/F EN 74-1B
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>0.960 Kg (960gm)</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Type of Load</td>
                        <td style={tableStyles.specValue}>Slip along a tube</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Minimum Slip Load</td>
                        <td style={tableStyles.specValue}>10 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Slip Load</td>
                        <td style={tableStyles.specValue}>15 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Distortion</td>
                        <td style={tableStyles.specValue}>32 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Safe Working Load</td>
                        <td style={tableStyles.specValue}>9.4 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Tension Load</td>
                        <td style={tableStyles.specValue}>18.80 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Swivel Coupler */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d2.jpg" alt="Swivel Coupler" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Swivel Coupler D/F EN 74-1A
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>1.10 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Type of Load</td>
                        <td style={tableStyles.specValue}>Slip along a tube</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Slip Load</td>
                        <td style={tableStyles.specValue}>09.50 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Distortion</td>
                        <td style={tableStyles.specValue}>19.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Safe Working Load</td>
                        <td style={tableStyles.specValue}>5.30 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Single (Putlog) Coupler */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d3.jpg" alt="Single Putlog Coupler" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Single (Putlog) Coupler D/F BS1139
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>0.630 Kg (630 gm)</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Type of Load</td>
                        <td style={tableStyles.specValue}>Force full the tube axially out of the coupler</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Slip Load</td>
                        <td style={tableStyles.specValue}>1.60 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Safe Working Load</td>
                        <td style={tableStyles.specValue}>0.53 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Girder Coupler/Beam Clamp */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d4.jpg" alt="Girder Coupler Beam Clamp" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Girder Coupler/Beam Clamp D/F AS1576
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', fontStyle: 'italic' }}>
                  Use in Toe Board Clamp pairs (In accordance with BS1139 Part 2 1982)
                </p>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>1.50 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Distortion Load Vertical</td>
                        <td style={tableStyles.specValue}>32.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Distortion Load Horizontal</td>
                        <td style={tableStyles.specValue}>11.50 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Slip Load</td>
                        <td style={tableStyles.specValue}>06.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Minimum Load Bearing Capacity</td>
                        <td style={tableStyles.specValue}>10.00 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Joint Pin (Pressed) */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d5.jpg" alt="Joint Pin Pressed" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Joint Pin (Pressed)
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>0.84 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Slip Load</td>
                        <td style={tableStyles.specValue}>6.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Tensile Load</td>
                        <td style={tableStyles.specValue}>7.80 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Bending Load</td>
                        <td style={tableStyles.specValue}>19.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Plated, Gold Passivated or Powder Coated</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sleeve Coupler Pressed */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d6.jpg" alt="Sleeve Coupler Pressed" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Sleeve Coupler Pressed EN 74-1B
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px', fontStyle: 'italic' }}>
                  In accordance with BS1139 Part 2 Sec 2.1 1991/EN74 1988
                </p>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>1.00 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Tensile Load</td>
                        <td style={tableStyles.specValue}>7.80 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Bend Load</td>
                        <td style={tableStyles.specValue}>21.00 KN</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Displacement</td>
                        <td style={tableStyles.specValue}>5.00 mm</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Maximum Load Bearing Capacity</td>
                        <td style={tableStyles.specValue}>19.00 KN</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ladder Clamp Pressed */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d7.jpg" alt="Ladder Clamp Pressed" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Ladder Clamp Pressed
                </h3>
                
                <p className="service-text" style={{ marginBottom: '20px' }}>
                  This is a unique safety product that enables a ladder to be firmly fastened by the stiles to horizontal scaffold tubes or posts. Used in pairs for maximum safety and stability, ensuring secure ladder placement during construction and maintenance work.
                </p>
              </div>

              {/* Staircase Coupler Pressed */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d8.jpg" alt="Staircase Coupler Pressed" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Staircase Coupler Pressed
                </h3>
                
                <p className="service-text" style={{ marginBottom: '20px' }}>
                  The staircase coupler is used for the construction of makeshift stairways by connecting together scaffold tubes and timbers (often scaffold boards) at angles varying from 28° to 90°. These units can be used in either left or right hand combination, providing flexible and safe temporary access solutions.
                </p>
              </div>

              {/* Toe Board Clamp */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d9.jpg" alt="Toe Board Clamp" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Toe Board Clamp
                </h3>
                
                <div style={tableStyles.specTableWrapper}>
                  <table style={tableStyles.specTable}>
                    <tbody>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Weight</td>
                        <td style={tableStyles.specValue}>0.32 Kg</td>
                      </tr>
                      <tr style={tableStyles.specRow}>
                        <td style={tableStyles.specLabel}>Finish</td>
                        <td style={tableStyles.specValue}>Galvanized</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Board Retaining Clamp */}
              <div style={tableStyles.specificationsSection}>
                <div className="service-image-wrapper" style={{ marginBottom: '25px' }}>
                  <img src="/assets/img/d10.jpg" alt="Board Retaining Clamp" />
                </div>
                
                <h3 style={tableStyles.specHeading}>
                  Board Retaining Clamp
                </h3>
                
                <p className="service-text" style={{ marginBottom: '15px' }}>
                  <strong>Key Features:</strong>
                </p>
                <ul style={{ marginLeft: '20px', marginBottom: '15px', lineHeight: '1.8' }}>
                  <li>Conforms to BS EN 1139: Section 2.2. 1991</li>
                  <li>Silver or gold zinc plated finish</li>
                  <li>Used for securing scaffold boards</li>
                </ul>
                
                <p className="service-text">
                  The board retaining clamp is used to secure scaffolding boards. Board retaining clamps ensure that scaffolding boards are carefully and safely locked into the correct position for a safe work environment, preventing accidental displacement and enhancing overall site safety.
                </p>
              </div>
            </div>

            <div className="blockquote">
              <span className="quote-icon">"</span>
              At Mountain Falcon, we don't just provide scaffolding; we build safe, reliable platforms for success. Our commitment to excellence, safety, and innovation drives every project we undertake, ensuring superior results that stand the test of time.
              <div className="blockquote-author">— Mountain Falcon Team</div>
            </div>

            <div className="tags-section">
              <span className="tags-label">Services:</span>
              <span className="tag">Scaffold Fittings</span>
              <span className="tag">EN 10219</span>
              <span className="tag">BS 1139</span>
              <span className="tag">Industrial Support</span>
              <span className="tag">Safety Systems</span>
            </div>
          </div>

          <div className="sidebar">
            <div className="widget">
              <h3 className="widget-title">Search Services</h3>
              <div className="search-form">
                <input type="text" className="search-input" placeholder="Search services..." />
                <button className="search-btn">
                  <Search size={18} />
                </button>
              </div>
            </div>

            <div className="widget">
              <h3 className="widget-title">Our Services</h3>
              {services.map((service, idx) => (
                <div key={idx} className="category-item">
                  <span>{service.title}</span>
                  <ArrowRight size={18} />
                </div>
              ))}
            </div>

            <div className="widget">
              <h3 className="widget-title">Follow Us</h3>
              <div className="social-links">
                <div className="social-link"><Facebook size={20} /></div>
                <div className="social-link"><Twitter size={20} /></div>
                <div className="social-link"><Linkedin size={20} /></div>
                <div className="social-link"><Instagram size={20} /></div>
                <div className="social-link"><Youtube size={20} /></div>
              </div>
            </div>

            <div className="widget">
              <h3 className="widget-title">Popular Tags</h3>
              <div className="tag-cloud">
                {['Scaffold Fittings', 'EN 10219', 'BS 1139', 'Construction', 'Safety Systems', 'Industrial Support', 'Steel Tubes', 'Infrastructure'].map((tag, idx) => (
                  <span key={idx} className="cloud-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FittingsService;