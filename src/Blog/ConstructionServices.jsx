import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';


const ConstructionServices = () => {
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

  return (
      <div className="blog-page">
     

    
      <div className="container">
        <div className="blog-grid">
          <div className="blog-main">
            <div className="hero-image">
              <img src="/assets/img/sp4.jpg" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Construction Equipment Rental

</h1>
                <p style={{ fontSize: '18px', opacity: 0.9,color:"white !important" }}>Building Tomorrow's Infrastructure Today</p>
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

            <h1 className="blog-title">Comprehensive Construction Equipment Rental

 Services by Mountain Falcon</h1>

            <p className="intro-text">
        In the field of Firefighting and Fire Protection Services, Mountain Falcon Company stands as a trusted industry leader—recognized for its advanced technical capabilities, innovative fire safety solutions, and unwavering dedication to life safety and asset protection. Our certified and highly skilled fire protection team delivers expertise across the entire lifecycle of fire systems, ensuring maximum reliability and total compliance with international safety codes.


            </p>

            <p className="intro-text">
          We specialize in the design, engineering, installation, testing, commissioning, preventive maintenance, periodic inspection, troubleshooting, and repair of complete fire protection systems for commercial, residential, industrial, and high-risk facilities.

            </p>

            <div className="service-section " id="building">
              <h2 className="service-title">Construction Equipment Rental
</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c12.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
    In today’s competitive industrial landscape—spanning construction, demolition, landscaping, agriculture, and large-scale infrastructure development—access to dependable and high-performance construction equipment is essential for maximizing productivity. Mountain Falcon Company provides a comprehensive fleet of construction machinery designed to meet the demanding needs of commercial, industrial, and heavy-duty project environments.

Whether your project requires a versatile backhoe loader, a compact machine for tight spaces, or a large hydraulic excavator for major earthmoving operations, Mountain Falcon Company delivers eq  uipment that combines power, precision, and efficiency. Our rental fleet is maintained under strict preventive maintenance schedules, ensuring superior performance, fuel efficiency, and operational reliability at all times.

We are equipped to support projects of any scale, offering everything from compact skid loaders to massive dozers and excavators—making us a trusted partner for contractors, builders, and industrial clients across the Kingdom.

              </p>
              
             
            </div>

           

            

            <div className="blockquote">
              <span className="quote-icon">"</span>
              At Mountain Falcon, we don't just build structures; we create legacies. Our commitment to excellence, safety, and innovation drives every project we undertake, ensuring superior results that stand the test of time.
              <div className="blockquote-author">— Mountain Falcon Team</div>
            </div>

            <div className="tags-section">
              <span className="tags-label">Services:</span>
              <span className="tag">Excavation</span>
              <span className="tag">Building</span>
              <span className="tag">Fencing</span>
              <span className="tag">Foundation</span>
              <span className="tag">Asphalt</span>
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
                {['Construction', 'Excavation', 'Building', 'Fencing', 'Foundation', 'Asphalt', 'Civil Works', 'Infrastructure'].map((tag, idx) => (
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

export default ConstructionServices;