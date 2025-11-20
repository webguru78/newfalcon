import React, { useState } from "react";
import { Link } from "react-router-dom";  // <-- IMPORTANT
import "./ScafflodingServices.css";

const services = [
  { title: "Scaffolding", img: "/assets/img/1.jpg", desc: "Comprehensive construction and infrastructure solutions", icon: "🏗️" },
  { title: "Gi Scaffold Tubes", img: "/assets/img/2.jpg", desc: "Advanced mechanical engineering and maintenance", icon: "⚙️" },
  { title: "Scaffold Fittings", img: "/assets/img/3.jpg", desc: "Complete electrical installations and systems", icon: "⚡" },
  { title: "Scaffolding Platform", img: "/assets/img/4.jpg", desc: "Precision control and monitoring systems", icon: "🔧" },
  { title: "System Scaffolding", img: "/assets/img/5.jpg", desc: "Safety systems and fire protection solutions", icon: "🚒" },
  { title: "Scaffolding Accessories", img: "/assets/img/6.jpg", desc: "Custom metal fabrication and assembly", icon: "🔨" },
  { title: "Scaffolding Tools & Safety Equipments", img: "/assets/img/7.jpg", desc: "Surface treatment and protective coatings", icon: "🎨" },
  { title: "Scaffolding Castor Wheels", img: "/assets/img/7.jpg", desc: "Surface treatment and protective coatings", icon: "🎨" },
  { title: "Aluminum Products", img: "/assets/img/7.jpg", desc: "Surface treatment and protective coatings", icon: "🎨" },
  { title: "Ladders", img: "/assets/img/7.jpg", desc: "Surface treatment and protective coatings", icon: "🎨" }
];

// Function to create URL slugs
const makeSlug = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

export default function ScafflodingServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="sg-section">
      <div className="container">

        {/* Header */}
        <div className="sg-header">
          <span className="sg-label">Our Expertise</span>
          <h2 className="sg-title">Professional Services</h2>
          <p className="sg-desc">
            We deliver industry-leading solutions across multiple engineering
            disciplines, combining technical excellence with innovative approaches
          </p>
        </div>

        <div className="row">
          {services.map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="sg-item">
                <div
                  className="sg-card"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="sg-img-wrap">
                    <img src={service.img} alt={service.title} className="sg-img" />
                    <div className="sg-overlay"></div>
                  </div>

                  <div className="sg-num">{String(i + 1).padStart(2, "0")}</div>

                  <div className="sg-content">
                    <span className="sg-icon">{service.icon}</span>
                    <div className="sg-vline"></div>
                    <h3 className="sg-service-title">{service.title}</h3>
                    <p className="sg-service-desc">{service.desc}</p>

                    {/* 🔗 React Router Link */}
                    <Link
                      to={`/${makeSlug(service.title)}`}
                      className="sg-link"
                    >
                      View Details
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
