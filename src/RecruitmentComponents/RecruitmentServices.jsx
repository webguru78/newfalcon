import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ScafflodingServices.css";

// Updated services with only 3 items
const services = [
  {
    title: "General Trading",
    img: "/assets/img/z1.jpg",
    desc: "Mountain Falcon Company operates a dynamic General Trading division, ensuring the smooth procurement and supply of diverse construction materials and equipment.",
    icon: "📦"
  },
  {
    title: "Professional Skilled Manpower Rental",
    img: "/assets/img/z2.jpg",
    desc: "Mountain Falcon Company provides highly professional and trained skilled manpower to meet the needs of complex construction and industrial projects.",
    icon: "👷"
  },
  {
    title: "Scrap Buyers & Dealers",
    img: "/assets/img/z3.jpg",
    desc: "Mountain Falcon Company supports sustainability through its Scrap Buyers & Dealers services, promoting responsible handling and recycling of construction waste.",
    icon: "♻️"
  }
];

// Function to create URL slugs
const makeSlug = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

export default function RecruitmentServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="sg-section">
      <div className="container">

        <div className="sg-header">
          <span className="sg-label">Our Expertise</span>
          <h2 className="sg-title">Professional Services</h2>
          <p className="sg-desc">
            Mountain Falcon Company delivers premium solutions with a focus on reliability, efficiency, and industry expertise.
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
