import React, { useState, useEffect } from "react";
import {
  Share2,
  User,
  Calendar,
  Search,
  ArrowRight,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import "./CivilServices.css";
const HeavyEquipmentServices = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = document.querySelectorAll(".service-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const services = [
    {
      id: "excavation",
      title: "Backfilling & Excavation",
      image: "/assets/img/back.jpg",
    },
    {
      id: "building",
      title: "Industrial Building",
      image: "/assets/img/Building.jpg",
    },
    {
      id: "fencing",
      title: "Fencing Solutions",
      image: "/assets/img/Fencing.jpg",
    },
    {
      id: "foundation",
      title: "Foundation Works",
      image: "/assets/img/Foundation.jpg",
    },
    {
      id: "asphalt",
      title: "Asphalt & Road Marking",
      image: "/assets/img/Asphalt.jpg",
    },
  ];
  const recentProjects = [
    {
      title: "Commercial Complex Construction",
      date: "Nov 2024",
      image: "/assets/img/Building.jpg",
    },
    {
      title: "Highway Asphalt & Marking Project",
      date: "Oct 2024",
      image: "/assets/img/Asphalt.jpg",
    },
    {
      title: "Industrial Foundation Development",
      date: "Sep 2024",
      image: "/assets/img/Foundation.jpg",
    },
  ];
  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-grid">
          <div className="blog-main">
            <div className="hero-image">
              <img src="/assets/img/sp4.jpg" />
              <div className="hero-overlay">
                <h1
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    color: "white",
                  }}
                >
                  System Scaffolding
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    opacity: 0.9,
                    color: "white !important",
                  }}
                >
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
            <h1 className="blog-title">
              Comprehensive System Scaffolding by Mountain Falcon
            </h1>
            <p className="intro-text">
              Scaffolding, also known as staging, is a temporary yet essential
              structural framework used throughout the construction industry to
              support workers, tools, and materials during various project
              phases. Whether in the construction, maintenance, renovation, or
              repair of buildings, bridges, plants, and other industrial or
              man-made structures, scaffolding ensures safe access, stable
              working platforms, and efficient execution of tasks at elevated
              heights.
            </p>
            <p className="intro-text">
              At MOUNTAIN FALCON COMPANY, we provide high-quality scaffolding
              solutions engineered to meet the demanding requirements of modern
              construction and industrial environments. Our systems are designed
              with a focus on safety, durability, and adaptability, ensuring
              they can withstand challenging site conditions while offering
              maximum flexibility for different project needs.
            </p>

            <div className="service-section " id="building">
              <h2 className="service-title">
                Heavy Lifting Equipment Rental — Mountain Falcon Company
              </h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/hev1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                With over a decade of strong operational expertise, Mountain
                Falcon Company has established itself as one of the most trusted
                and reliable heavy lifting equipment rental providers in the
                Kingdom. Our commitment to safety, efficiency, and modern
                lifting solutions has positioned us as a preferred partner for
                major industrial, construction, and infrastructure projects.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Certified Mobile Cranes</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/hev2.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Mountain Falcon Company offers a fully certified fleet of
                state-of-the-art Mobile Cranes, engineered to handle a wide
                spectrum of lifting requirements with maximum precision and
                safety. Our crane capacities range from 20 tons to 1200 tons,
                enabling us to serve everything from light construction needs to
                large-scale industrial and infrastructure lifting operations.
                Each crane undergoes strict inspection protocols, preventive
                maintenance, and full compliance with local and international
                safety standards. Whether you're executing plant shutdowns,
                structural erection, heavy lifting, or specialized hoisting
                tasks, our certified mobile cranes deliver unmatched reliability
                and performance. Backed by experienced operators and a dedicated
                technical team, Mountain Falcon Company ensures safe, efficient,
                and on-time execution for every lifting project.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Certified Rough Terrain Cranes</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/hev3.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Mountain Falcon Company provides a specialized fleet of
                Certified Rough Terrain Cranes designed for exceptional
                performance in challenging and uneven site conditions. With
                capacities ranging from 25 tons to 120 tons, our RT cranes
                deliver the ideal combination of strength, stability, and
                mobility—making them perfect for off-road construction,
                industrial maintenance, and oil & gas field operations. Built to
                operate safely on rugged surfaces, each crane undergoes rigorous
                inspection, preventive maintenance, and full compliance checks
                to meet international lifting standards. Our skilled and
                certified operators ensure smooth, precise, and secure lifting
                operations across all project environments. Whether your project
                demands reliable lifting in remote locations, harsh terrains, or
                restricted-access areas, Mountain Falcon Company ensures the
                power, durability, and efficiency you can depend on.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Certified Crawler Cranes</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/hev4.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Mountain Falcon Company offers a world-class fleet of Certified
                Crawler Cranes, engineered to deliver maximum lifting power,
                stability, and reliability for the most demanding industrial and
                infrastructure projects. With an extensive capacity range from
                55 tons up to 3200 tons, our crawler cranes are ideal for
                mega-projects requiring heavy, continuous, and high-reach
                lifting operations. Each crane in our fleet is routinely
                inspected, maintained, and certified to comply with
                international safety and performance standards. Supported by
                highly trained operators and a dedicated technical team,
                Mountain Falcon Company ensures safe, precise, and efficient
                lifting solutions for complex and large-scale project
                environments.{" "}
              </p>
            </div>
            <div className="blockquote">
              <span className="quote-icon">"</span>
              At Mountain Falcon, we don't just build structures; we create
              legacies. Our commitment to excellence, safety, and innovation
              drives every project we undertake, ensuring superior results that
              stand the test of time.
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
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search services..."
                />
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
                <div className="social-link">
                  <Facebook size={20} />
                </div>
                <div className="social-link">
                  <Twitter size={20} />
                </div>
                <div className="social-link">
                  <Linkedin size={20} />
                </div>
                <div className="social-link">
                  <Instagram size={20} />
                </div>
                <div className="social-link">
                  <Youtube size={20} />
                </div>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget-title">Popular Tags</h3>
              <div className="tag-cloud">
                {[
                  "Construction",
                  "Excavation",
                  "Building",
                  "Fencing",
                  "Foundation",
                  "Asphalt",
                  "Civil Works",
                  "Infrastructure",
                ].map((tag, idx) => (
                  <span key={idx} className="cloud-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeavyEquipmentServices;
