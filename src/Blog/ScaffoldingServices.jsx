import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ScaffoldingServices = () => {
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
<Navbar/>
      <div className="container">
        <div className="blog-grid">
          <div className="blog-main">
            <div className="hero-image">
              <img src="/assets/img/sp4.jpg" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Scaffolding Services</h1>
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
            <h1 className="blog-title">Comprehensive Scaffolding Services by Mountain Falcon</h1>
            <p className="intro-text">
         Scaffolding, also known as staging, is a temporary yet essential structural framework used throughout the construction industry to support workers, tools, and materials during various project phases. Whether in the construction, maintenance, renovation, or repair of buildings, bridges, plants, and other industrial or man-made structures, scaffolding ensures safe access, stable working platforms, and efficient execution of tasks at elevated heights.
            </p>
            <p className="intro-text">
          At MOUNTAIN FALCON COMPANY, we provide high-quality scaffolding solutions engineered to meet the demanding requirements of modern construction and industrial environments. Our systems are designed with a focus on safety, durability, and adaptability, ensuring they can withstand challenging site conditions while offering maximum flexibility for different project needs.
            </p>

            <div className="service-section " id="building">
              <h2 className="service-title">Base Supported Scaffolding</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/base1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
             At MOUNTAIN FALCON COMPANY, we provide reliable and industry-standard base supported scaffolding solutions designed to meet the needs of various construction and industrial projects. Base supported scaffolding is one of the most widely used temporary structures, offering stability, flexibility, and ease of assembly for workers at different heights.
              </p>
             </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Tube & Fittings Scaffolding</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/base2.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
           Tube and clamp scaffolding is one of the most versatile and adaptable scaffolding systems used in the construction and industrial sectors. It is particularly valuable in situations where standard frame or modular systems cannot be installed due to irregular shapes, confined areas, complex structural designs, or obstacles around the worksite. Comprised of high-strength steel tubes connected with adjustable clamps, this system allows unlimited configurations and can be built to match any angle, height, or geometric requirement. Its strength, durability, and flexibility make it ideal for industrial maintenance, shipyards, refinery structures, tanks, towers, and any environment that demands a custom-fit access solution. 
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
<Footer/>
    </div>
  );
};

export default ScaffoldingServices;