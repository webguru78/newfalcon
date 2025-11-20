import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';
import Footer from '../components/Footer';

const InstrumentationServices = () => {
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
              <img src="/assets/img/in3.jpg" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Instrumentation Services</h1>
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

            <h1 className="blog-title">Comprehensive Instrumentation Services by Mountain Falcon</h1>

            <p className="intro-text">
             In the realm of Mechanical Services, MOUNTAIN FALCON COMPANY stands out for its exceptional technical expertise and steadfast commitment to efficiency. Our highly skilled team of technicians and engineers excels in the installation, maintenance, and repair of mechanical systems across a wide range of industries.
            </p>

            <p className="intro-text">
              From the precise installation of HVAC systems to the meticulous upkeep of advanced machinery, our Mechanical Services are designed to ensure optimal performance and long-term reliability. With a blend of technical mastery and a proactive service approach, MOUNTAIN FALCON COMPANY supports the smooth operation of diverse mechanical systems—enhancing productivity, minimizing downtime, and delivering lasting value to every client project.
            </p>

            <div className="service-section " id="building">
              <h2 className="service-title">Instrumentation Services</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/in1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
             Mountain Falcon Company delivers specialized Instrumentation Services, ensuring precision, reliability, and seamless integration for industrial operations. Our expertise includes control and equipment room works, field instrument installation, cabling and cable termination works, calibration activities, and complete instrument testing and commissioning. We excel in instrument equipment installation, cable tray and trunking systems, internal cable installation and connections, conduit and duct installation, and the integration of all types of field instrument analyzers.
              </p>
              
             
            </div>

            <div className="service-section " id="building">
              <h2 className="service-title">Instrumentation Services</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/in4.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
            Our team also handles metering skid installations, local panels and gauge boards, junction box installation, and the fabrication of protective sunshades for field instruments. With capabilities in field instrument bench calibration, loop testing, sequence testing, and the setup of air volume tanks, Mountain Falcon Company ensures high-accuracy instrumentation solutions built to meet the demands of modern industrial environments.
              </p>
               <ul className="service-features" style={{color:"black",lineHeight:"3",fontSize:"1.1rem",fontWeight:"600"}}>
  <li>✔ Calibration Works
</li>
  <li>✔ All Types of Field Instrument Analyzers
</li>
  <li>✔Cabling & Cable Termination Works
</li>
  <li>✔ Cable Tray and/or Trunks
</li>
  <li>✔ Field Instrument Bench Calibration
</li>
 
</ul>
             
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
      <Footer/>
    </div>
  );
};

export default InstrumentationServices;