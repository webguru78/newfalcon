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
const SystemServices = () => {
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
              <h2 className="service-title">Cup lock System</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                The Cuplock Scaffolding System is globally recognized for its
                speed, safety, and reliability, making it one of the most
                preferred modular scaffolding systems in the construction and
                industrial sectors. Its unique node-point locking mechanism
                allows up to four horizontal members to be securely connected to
                a vertical standard using just a single hammer blow, ensuring a
                rigid, safe, and stable structure. The innovative design enables
                multiple ledgers or transoms to connect to a single vertical
                member in one swift action, eliminating the need for traditional
                locking components such as nuts, bolts, or wedges. This not only
                speeds up assembly time but also reduces maintenance
                requirements, making Cuplock one of the most cost-efficient
                scaffolding systems available.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">
                The Ultimate Advantage Cup lock System
              </h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c2.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Mountain Falcon proudly offers the Cuplock Scaffolding System, a
                superior choice defined by its efficiency, strength, and full
                technical backing. This robust system is engineered for fast to
                assemble and simple to erect operations, leading directly to
                significant savings in erection times and reduced labour costs
                through its systemized bracing. Beyond speed, it offers
                unmatched reliability, built to handle heavy loads with a
                remarkable strength of 40 KN per leg. Its inherent versatility
                makes it ideal for virtually any project, providing stable
                support and access solutions. Furthermore, clients receive
                complete peace of mind and confidence through Mountain Falcon's
                comprehensive services, including full design support with C.A.D
                and in-depth technical support whenever needed.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">
              Mountain Falcon Cuplock: Confidence Backed by C.A.D. Support
              </h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c3.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
               For every project, Mountain Falcon offers absolute assurance rooted in extensive global experience. Our history of utilizing Cuplock Scaffolding in virtually every type of project across K.S.A and internationally provides a foundation of reliability and expertise. This real-world experience enables us to instill absolute confidence in your use of the system. We ensure this by providing simply the best technical support available, which includes comprehensive extensive technical and design support coupled with an advanced Computer Aided Design (C.A.D.) facility. With Mountain Falcon Cuplock, you are always supported by the industry's most detailed technical expertise.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">
               Mountain Falcon's Cuplock Ledgers/Transoms: Essential Horizontal Members
              </h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c4.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
               The Cuplock Ledgers/Transoms serve as the vital horizontal elements within the Mountain Falcon Cuplock system, meticulously engineered to provide stable connections and robust platform support. These members are fabricated from twin structural angles fixed back-to-back, with a drop forged blade at each end that precisely locates into a bottom cup on the standard, where it is then securely locked in position by the top cup. Crucially, the outward standing bottom leg of the angles is designed to support the steel planks in a captive manner, enhancing safety and stability. For superior strength in demanding applications, Transoms measuring 1.8m and above include an additional web member welded below the flange section. Available in various lengths, including 0.6, 0.9, 1.0, 1.2, 1.3, 1.6, 1.8, 2.0, and 2.5 meters, these versatile components are essential for both scaffolding and formwork applications.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">
               Mountain Falcon's Cuplock Standards: The Vertical Backbone
              </h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/c5.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
               The Cuplock Standards are the critical, vertical load-bearing members of the scaffolding system, manufactured from durable 48.3mm O.D. tube. These standards are defined by their unique cup joints placed at precise 500mm intervals along the post. The system's robustness is ensured by welded bottom cups made from high-quality steel and captive mobile top cups specifically designed to withstand rigorous site handling. For vertical extension, integral spigots are provided at the top of each standard, allowing for seamless connection to the base of the next standard. To ensure maximum safety and structural continuity, both the spigots and the base of each standard feature 11/16mm diameter holes for the insertion of locking pins, securely joining the standards vertically. These essential vertical posts are available in lengths ranging from 1.0mtr to 3.0mtr, providing the core structure for any scaffolding or shoring application.{" "}
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

export default SystemServices;
