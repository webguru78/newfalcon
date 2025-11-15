import React, { useState } from "react";
import "./HeavyServices.css";

const services = [
  { title: "Heavy Lifting Equipment Rental", img: "/assets/img/1.jpg", desc: "Comprehensive construction and infrastructure solutions", icon: "🏗️" },
  { title: "Light Lifting Equipment Rental", img: "/assets/img/2.jpg", desc: "Advanced mechanical engineering and maintenance", icon: "⚙️" },
  { title: "Transportation Equipment Rental", img: "/assets/img/3.jpg", desc: "Complete electrical installations and systems", icon: "⚡" },
  { title: "Construction Equipment Rental", img: "/assets/img/4.jpg", desc: "Precision control and monitoring systems", icon: "🔧" },
  { title: "Power Equipment Rental", img: "/assets/img/4.jpg", desc: "Precision control and monitoring systems", icon: "🔧" },

];

export default function HeavyServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="sg-section">
      <div className="container">
        
        {/* Header */}
        <div className="sg-header">
          <span className="sg-label">Our Expertise</span>
          <h2 className="sg-title">Professional Services</h2>
          <p className="sg-desc">
            We deliver industry-leading solutions across multiple engineering disciplines,
            combining technical excellence with innovative approaches
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

                  <div className="sg-num">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="sg-content">
                    <span className="sg-icon">{service.icon}</span>
                    <div className="sg-vline"></div>
                    <h3 className="sg-service-title">{service.title}</h3>
                    <p className="sg-service-desc">{service.desc}</p>
                    <a href="#" className="sg-link">
                      View Details
                    
                    </a>
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
