import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./ServicesGrid.css";

// Slug Generator (Fixes spaces, &, /, special chars)
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")       // Replace &
    .replace(/\s+/g, "-")       // Replace spaces
    .replace(/[^a-z0-9-]/g, "") // Remove special chars
    .trim();
}

const services = [
  { title: "Civil Services", img: "/assets/img/1.jpg", desc: "Comprehensive construction and infrastructure solutions", icon: "🏗️" },
  { title: "Mechanical Services", img: "/assets/img/2.jpg", desc: "Advanced mechanical engineering and maintenance", icon: "⚙️" },
  { title: "Electrical Services", img: "/assets/img/3.jpg", desc: "Complete electrical installations and systems", icon: "⚡" },
  { title: "Instrumentation Services", img: "/assets/img/4.jpg", desc: "Precision control and monitoring systems", icon: "🔧" },
  { title: "Firefighting Services", img: "/assets/img/5.jpg", desc: "Safety systems and fire protection solutions", icon: "🚒" },
  { title: "Fabrication", img: "/assets/img/6.jpg", desc: "Custom metal fabrication and assembly", icon: "🔨" },
  { title: "Sandblasting & Painting", img: "/assets/img/7.jpg", desc: "Surface treatment and protective coatings", icon: "🎨" },
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="sg-section">
      <div className="container">

        <div className="sg-header">
          <span className="sg-label">Our Expertise</span>
          <h2 className="sg-title">Professional Services</h2>
          <p className="sg-desc">
            We deliver industry-leading solutions across multiple engineering disciplines,
            combining technical excellence with innovative approaches
          </p>
        </div>

        <div className="row">
          {services.map((service, i) => {
            const slug = generateSlug(service.title);

            return (
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

                    <div className="sg-num">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="sg-content">
                      <span className="sg-icon">{service.icon}</span>
                      <div className="sg-vline"></div>
                      <h3 className="sg-service-title">{service.title}</h3>
                      <p className="sg-service-desc">{service.desc}</p>

                      <Link to={`/${slug}`} className="sg-link">
                        View Details
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
