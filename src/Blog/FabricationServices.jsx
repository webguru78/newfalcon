import React, { useState, useEffect } from 'react';
import { Share2, User, Calendar, Search, ArrowRight, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import './CivilServices.css';


const FabricationServices = () => {
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
              <img src="/assets/img/fb3.jpg" />
              <div className="hero-overlay">
                <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px',color:"white" }}>Fabrication Services</h1>
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

            <h1 className="blog-title">Comprehensive Fabrication Services by Mountain Falcon</h1>

            <p className="intro-text">
           In the field of Firefighting Services, MOUNTAIN FALCON COMPANY stands as a trusted leader known for its unmatched technical expertise, advanced safety solutions, and unwavering commitment to protection and reliability. Our certified and highly trained team specializes in the complete lifecycle of fire protection systems—including installation, testing, maintenance, inspection, and repair—ensuring comprehensive safety coverage for commercial, residential, and industrial sectors.


            </p>

            <p className="intro-text">
            We deliver end-to-end solutions tailored to the unique fire safety requirements of each project. From the precise installation of fire hydrant networks, automatic fire sprinkler systems, addressable and conventional fire alarm systems, smoke and heat detection systems, and FM-200 / CO₂ / NOVEC-1230 suppression systems, to the careful servicing of emergency lighting, fire extinguishers, pump rooms, and control panels, every component is engineered to meet international codes and safety standards.
            </p>

            <div className="service-section " id="building">
              <h2 className="service-title">Fabrication Services</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/fb1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
         At MOUNTAIN FALCON COMPANY, we take pride in delivering exceptional quality through every step of our work. From the selection of premium materials to the expertise of our skilled craftsmen, we ensure that each project reflects durability, reliability, and precision. Our commitment to excellence begins at the planning stage and continues all the way through installation, finishing, and post-project support.

With extensive industry experience, our team understands the technical requirements and unique challenges of every project. This allows us to provide customized solutions that meet the highest standards of performance and safety. Whether it's a small repair job or a large-scale industrial project, we approach every task with the same level of dedication and professionalism.

In addition to delivering high-quality work, MOUNTAIN FALCON COMPANY also provides ongoing maintenance and support to preserve the long-term value of every project. Our clients trust us not only for our craftsmanship but also for our consistent follow-up, transparent communication, and reliable after-service assistance.
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

export default FabricationServices;