import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';

const CivilServices = () => {
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
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=500&fit=crop" alt="Mountain Falcon Civil Services" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Civil Services Excellence</h1>
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

            <h1 className="blog-title">Comprehensive Civil Services by Mountain Falcon</h1>

            <p className="intro-text">
              At Mountain Falcon, we deliver excellence across a comprehensive range of civil construction services. Our expertise spans from foundational earthworks to sophisticated infrastructure development, ensuring every project meets the highest standards of quality, safety, and efficiency.
            </p>

            <p className="intro-text">
              Our integrated approach combines cutting-edge technology with skilled craftsmanship, enabling us to handle projects of any scale and complexity. From initial site preparation to final finishing touches, Mountain Falcon stands as your trusted partner in construction excellence.
            </p>

            <div className="service-section" id="excavation">
              <h2 className="service-title">Backfilling & Excavation</h2>
              <div className="service-image-wrapper">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=350&fit=crop" alt="Excavation Services" />
              </div>
              <p className="service-text">
                Our expertise in backfilling and excavation stands as the cornerstone of efficient project execution. With a meticulous approach, we carefully excavate sites, adhering to industry-leading practices to ensure optimal safety and precision.
              </p>
              <p className="service-text">
                Our backfilling process involves the strategic placement and compacting of various materials, contributing to soil stabilisation, foundation integrity, and overall project durability. Through seamless coordination and the use of advanced machinery, we create a solid foundation for construction endeavours while maintaining a commitment to environmental sustainability.
              </p>
            </div>

            <div className="service-section" id="building">
              <h2 className="service-title">Building – Industrial & Commercial</h2>
              <div className="service-image-wrapper">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=350&fit=crop" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Mountain Falcon has vast experience executing all types of industrial, commercial, and residential buildings. Our portfolio includes power substation buildings, central control buildings, pump stations, residential apartments, hotels, and villas.
              </p>
              <p className="service-text">Most of our projects are executed with high quality and safety compliance with international standards. We specialize in:</p>
              <ul className="service-list">
                <li>Multistoried and high-rise commercial and residential buildings</li>
                <li>Substation and control buildings</li>
                <li>Pump stations and water treatment facilities</li>
                <li>Hospitals and hospitality infrastructure</li>
                <li>Industrial warehouses and storage facilities</li>
                <li>Temporary site offices and camp facilities</li>
              </ul>
            </div>

            <div className="service-section" id="fencing">
              <h2 className="service-title">Fencing Solutions</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/Fencing.jpg" alt="Fencing Solutions" />
              </div>
              <p className="service-text">
                With a focus on durability and longevity, our fencing solutions are a seamless blend of security, style, and lasting value, making a significant contribution to the safeguarding and enhancement of properties across diverse environments.
              </p>
              <p className="service-text">
                Mountain Falcon offers a variety of fencing solutions including chain-link, wooden, steel panel, and temporary construction fences. Our fences are designed and installed with a focus on durability, security, and compliance with safety regulations.
              </p>
            </div>

            <div className="service-section" id="foundation">
              <h2 className="service-title">Foundation Works</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/Foundation.jpg" alt="Foundation Works" />
              </div>
              <p className="service-text">
                We provide customers with an easy and efficient way to establish solid foundations for any construction project. Our foundation works are designed to be durable and long-lasting, suitable for a variety of structures and settings.
              </p>
              <p className="service-text">
                Our foundations are engineered to withstand environmental challenges and support structures of varying complexity. Perfect for residential, commercial, and industrial applications, our foundation works ensure stability and longevity.
              </p>
            </div>

            <div className="service-section" id="asphalt">
              <h2 className="service-title">Asphalt & Road Marking</h2>
              <div className="service-image-wrapper">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=350&fit=crop" alt="Asphalt Services" />
              </div>
              <p className="service-text">
                Our proficiency in asphalt paving and road marking stands as a testament to precision and safety. Armed with cutting-edge technology and a skilled workforce, we undertake asphalt projects with unwavering dedication, ensuring smooth, durable surfaces that withstand the test of time and traffic.
              </p>
              <p className="service-text">
                With a commitment to quality, efficiency, and innovation, our asphalt and road marking services contribute to the creation of resilient roadways that connect communities, streamline traffic, and prioritize safety for all road users.
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

export default CivilServices;