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
const AccessoriesServices = () => {
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
              <h2 className="service-title">Spigot Connector</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s1.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                A spigot connector is designed to be fitted to the top of a
                scaffold standard to allow secure, end-to-end vertical
                connections between two standards. By extending the height of
                the scaffold, it ensures continuity, stability, and proper load
                transfer throughout the structure. Spigots may be permanently
                welded to the standard or supplied as loose components. When
                provided separately, they come with the appropriate nuts and
                bolts, allowing them to be firmly fastened to the top of the
                standard as needed. This flexibility makes them suitable for
                various site requirements and assembly preferences. Each spigot
                connector is manufactured from a 300 mm long square tube,
                offering durability, alignment accuracy, and reliable structural
                support in scaffold installations.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Intermediate Transoms</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s2.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Intermediate transoms are used when the spacing between scaffold
                standards is greater than the recommended span for scaffold
                boards. They provide additional support to the boards, ensuring
                a stable and secure working platform. Cuplock intermediate
                transoms are available in a range of lengths to suit different
                scaffold bay widths and load requirements.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Cuplock Bracing</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s3.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                Cuplock bracing is used to provide essential diagonal support
                and stability to scaffolding structures. These braces are
                designed as longitudinal members equipped with swivel-forged
                blades at both ends. The blades securely engage into the top and
                bottom cups of Cuplock standards, ensuring a rigid and properly
                aligned scaffold framework. A range of brace lengths is
                available to suit various bay widths and structural
                requirements.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Adjustable Base Jack</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s4.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                The Adjustable Base Jack serves as the foundational support
                component in a scaffolding system. It is positioned at the base
                to hold the scaffold standard or formwork, allowing precise
                height adjustments to achieve a level and stable working
                platform. By compensating for uneven ground conditions, the base
                jack significantly enhances the overall stability and safety of
                the scaffold structure. Base jacks are available with either a
                plated or painted finish, offering durability and resistance to
                environmental wear.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Socket Base</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s5.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                The Socket Base is designed for use with a Universal Jack,
                providing a secure and stable footing for scaffold standards or
                formwork systems. It includes a pre-drilled hole that allows the
                insertion of a securing bolt when additional fixing or stability
                is required. Each socket base is manufactured from high-quality
                steel and features precise welding to ensure structural
                integrity and long-term performance. The components are finished
                with either a durable powder-coated layer or high-grade paint to
                enhance corrosion resistance and extend service life. This
                combination of premium materials and craftsmanship ensures
                excellent fit, finish, and overall durability in demanding site
                conditions.{" "}
              </p>
            </div>
            <div className="service-section " id="building">
              <h2 className="service-title">Spigot Base Plate</h2>
              <div className="service-image-wrapper">
                <img src="/assets/img/s6.jpg" alt="Industrial Building" />
              </div>
              <p className="service-text">
                The Spigot Base Plate, measuring 150 × 150 mm, is fitted at the
                base of the scaffold standard to provide a stable and
                load-bearing foundation. Manufactured from a 6.0 mm thick steel
                plate, it is engineered to safely distribute the weight of the
                scaffold structure to the ground, enhancing stability and
                overall system integrity. This base plate is suitable for
                erecting scaffold towers across a wide range of commercial,
                industrial, and construction applications. Each unit is produced
                using high-quality steel and precision welding to ensure
                superior strength and long-term durability. The plates are
                finished with either a powder-coated or high-grade painted
                surface, offering enhanced protection against corrosion and
                wear.{" "}
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

export default AccessoriesServices;
