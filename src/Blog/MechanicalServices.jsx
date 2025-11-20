import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';
import Footer from '../components/Footer';

const MechanicalServices = () => {
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
              <img src="/assets/img/mp2.jpg" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Mechanical Services</h1>
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

            <h1 className="blog-title">Comprehensive Mechanical Services by Mountain Falcon</h1>

            <p className="intro-text">
             In the realm of Mechanical Services, MOUNTAIN FALCON COMPANY stands out for its exceptional technical expertise and steadfast commitment to efficiency. Our highly skilled team of technicians and engineers excels in the installation, maintenance, and repair of mechanical systems across a wide range of industries.
            </p>

            <p className="intro-text">
              From the precise installation of HVAC systems to the meticulous upkeep of advanced machinery, our Mechanical Services are designed to ensure optimal performance and long-term reliability. With a blend of technical mastery and a proactive service approach, MOUNTAIN FALCON COMPANY supports the smooth operation of diverse mechanical systems—enhancing productivity, minimizing downtime, and delivering lasting value to every client project.
            </p>

            <div className="service-section" id="excavation">
              <h2 className="service-title">Pipeline Works</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/mp3.jpg" alt="Excavation Services" />
              </div>
              <p className="service-text">
              Leveraging our quality-driven team of skilled professionals, MOUNTAIN FALCON COMPANY delivers exceptional pipeline construction services tailored to our clients' needs. Every project is executed by experienced specialists who rely on advanced techniques and high-grade components to ensure durability and performance.
              </p>
              <p className="service-text">
               MOUNTAIN FALCON COMPANY excels in Pipeline Works, offering end-to-end solutions for the construction, maintenance, and repair of pipelines. Our expertise spans multiple sectors, including oil and gas, water supply, and sewage systems. Equipped with modern tools and technical proficiency, our team ensures the efficient and reliable installation of pipelines for a wide range of applications.
              </p>
            </div>

            <div className="service-section" id="building">
              <h2 className="service-title">Mechanical Services</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/mp4.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
              MOUNTAIN FALCON COMPANY offers a comprehensive range of mechanical and industrial services, covering everything from Industrial Plant Piping Works, Machinery Installation, Airline Supply Installation, and Mechanical Erection, to Drainage and Sewer Line construction. Our expertise extends to HVAC Works, Insulation, Painting & Blasting, Testing & Commissioning, Pipe Spool Fabrication, Field Installation, and all types of system flushing. We specialize in installing various mechanical machinery, lifting equipment including elevators, engines, pumps, as well as hook-up systems, manifolds, and accessories.
              </p>
              <p className="service-text">MOUNTAIN FALCON COMPANY also excels in Airline Supply Piping & Tubing, machinery erection such as evaporators and pumps, and piping erection involving cladded, carbon steel, and stainless-steel pipes. Our capabilities include constructing sump pits and drainage channels, intake erection (dam boards, strainers, sluice gates)</p>
              <ul className="service-list">
                <li>Industrial Plant Piping Works</li>
                <li>All Types of Engine & Pump Installation</li>
                <li>Machinery Installation Works</li>
                <li>Hook-up & Accessories Installation</li>
                <li>Drainage & Sewer Lines</li>
                <li>Insulation Works</li>
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

export default MechanicalServices;