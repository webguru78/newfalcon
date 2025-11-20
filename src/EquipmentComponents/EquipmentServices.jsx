import React, { useState } from "react";
import { Link } from "react-router-dom"; // <-- IMPORTANT
import "./ScafflodingServices.css";

// Updated service list for Mountain Falcon Company
const services = [
  {
    title: "Heavy Lifting Equipment Rental",
    img: "/assets/img/he1.jpg",
    desc:
      "With over a decade of hands-on operational excellence, Mountain Falcon Company provides industry-leading heavy lifting equipment rental solutions across the Kingdom.",
    icon: "🏗️",
  },
  {
    title: "Light Lifting Equipment Rental",
    img: "/assets/img/he2.jpg",
    desc:
      "Our wide range of light lifting equipment supports construction, oil & gas, and marine sectors with reliable and efficient solutions.",
    icon: "⚙️",
  },
  {
    title: "Transportation Equipment Rental",
    img: "/assets/img/he3.jpg",
    desc:
      "Backed by skilled staff, preventive maintenance facilities, and a quality-focused team, Mountain Falcon delivers trusted transportation equipment services across the Kingdom.",
    icon: "🚚",
  },
  {
    title: "Construction Equipment Rental",
    img: "/assets/img/he4.jpg",
    desc:
      "In industries like construction, demolition, agriculture, and landscaping, having reliable equipment is essential — we supply high-quality solutions to help maximize productivity.",
    icon: "🏗️",
  },
  {
    title: "Power Equipment Rental",
    img: "/assets/img/he5.jpg",
    desc:
      "With deep industry insight, Mountain Falcon Company offers dependable and efficient power equipment rental services tailored to your operational needs.",
    icon: "🔌",
  },


];

// Function to create URL slugs
const makeSlug = (text) =>
  text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

export default function EquipmentServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="sg-section">
      <div className="container">
        {/* Header */}
        <div className="sg-header">
          <span className="sg-label">Our Expertise</span>
          <h2 className="sg-title">Professional Heavy Equipment <br /> Rental Services</h2>
          <p className="sg-desc">
            Mountain Falcon Company delivers industry-leading engineering and
            equipment rental services with a strong commitment to reliability,
            innovation, and operational excellence.
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

                    {/* React Router Link */}
                    <Link to={`/${makeSlug(service.title)}`} className="sg-link">
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
