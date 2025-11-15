import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContractBreadcrum from '../ContractComponents/ContractBreadcrum';

const ElectricalServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
  {
    id: 3,
    title: "Drainage & Sewer Line Solutions",
    image: "/assets/img/5.jpg",
    description: "Mountain Falcon Company provides complete drainage and sewage solutions, from construction to installation. We work with various pipe materials including RTR, cemented, BI.",
    features: [
    "Building & Architectural Lighting",
      "Grounding Well, Grounding Plate & Flat Bar Installation",
      "Lightning Rod and Pole Installation",
      "Painting & Blasting Services",
      "All Types of Flushing Operations",
      "Testing & Commissioning",
      "Intake Erection (Dam Boards, Strainers, Sluice Gates)",
     
      
    ]
  },
  {
    id: 4,
    title: "Electrical Services",
    image: "/assets/img/6.jpg",
    description: "Our skilled professionals handle the installation of diverse electrical and mechanical equipment, ensuring safe, efficient, and reliable integration across projects.",
    features: [
      "Survey & Estimates",
      "Field Design Works",
      "Equipment Installation",
      "Cable & Cable Termination Works",
      "Lighting & Power Receptacles",
      "Miscellaneous Services",
      "All Types of Transformer Field Assembly",
     
     
    ]
  }
];


  const additionalServices = [
    "Insulation & Cladding Works",
    "Painting & Blasting Services",
    "All Types of Flushing Operations",
    "Testing & Commissioning",
    "Intake Erection (Dam Boards, Strainers, Sluice Gates)",
    "Airline Supply Piping & Tubing",
    "Evaporation & Pump Machinery Erection",
    "Cladded Pipes, CS & SS Pipe Installation"
  ];

  return (
    <div style={{  backgroundColor: '#ffffff', color: '#1a1a1a' }}>
         <ContractBreadcrum/>
      {/* Hero Section - Clean & Professional */}
      <section >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M50 10L40 30L60 30Z\'/%3E%3Cpath d=\'M30 40L20 60L40 60Z\'/%3E%3Cpath d=\'M70 40L60 60L80 60Z\'/%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.6
        }}></div>
     
      </section>

      {/* Introduction Section */}
      <section className="container py-5" style={{ marginTop: '0px', zIndex: 10, position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{
              background: '#ffffff',
              padding: '60px 50px',
              borderRadius: '20px',
              boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0'
            }}>
              <h2 style={{
                color: '#0f3460',
                fontWeight: '700',
                fontSize: '2.6rem',
                marginBottom: '25px',
                letterSpacing: '-0.5px',
                textAlign: 'center'
              }}>
                Comprehensive Electrical Solutions
              </h2>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.85',
                color: '#444',
                marginBottom: '20px'
              }}>
               Adka's Electrical Services division stands as a beacon of innovation and reliability in the construction industry. Our skilled electrical engineering team excels in providing end-to-end solutions, from designing and installing electrical systems to maintenance and troubleshooting.


              </p>
              <p style={{
                fontSize: '1.15rem',
                lineHeight: '1.85',
                color: '#444'
              }}>
               Whether it's ensuring a robust power supply for construction projects or implementing intricate electrical components, we prioritize safety and efficiency. With a focus on cutting-edge technology and industry best practices, our Electrical Services contribute to the seamless integration of power systems, lighting, and other critical electrical components in various projects, ensuring they meet the highest standards of quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 style={{
            color: '#0f3460',
            fontWeight: '700',
            fontSize: '2.7rem',
            marginBottom: '16px'
          }}>
            Our Core Services
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
            End-to-end solutions engineered for precision, durability, and performance
          </p>
        </div>

        <div className="row g-5">
          {services.map((service) => (
            <div key={service.id} className="col-lg-6">
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: activeService === service.id
                    ? '0 20px 60px rgba(15, 52, 96, 0.18)'
                    : '0 8px 30px rgba(0,0,0,0.07)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: activeService === service.id ? 'translateY(-12px)' : 'translateY(0)',
                  cursor: 'pointer',
                  height: '100%',
                  border: '1px solid #f0f4f8'
                }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: activeService === service.id ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.65) 100%)'
                  }}></div>
                </div>
                <div style={{ padding: '35px' }}>
                  <h3 style={{
                    color: '#0f3460',
                    fontWeight: '600',
                    marginBottom: '16px',
                    fontSize: '1.55rem',
                    lineHeight: '1.3'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: '#444',
                    lineHeight: '1.75',
                    marginBottom: '24px',
                    fontSize: '1.02rem'
                  }}>
                    {service.description}
                  </p>
                  <div style={{
                    borderTop: '1px dashed #e0e6ed',
                    paddingTop: '22px'
                  }}>
                    <h5 style={{
                      color: '#0f3460',
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      marginBottom: '14px',
                      letterSpacing: '0.5px'
                    }}>
                      KEY CAPABILITIES
                    </h5>
                    <ul style={{
                      paddingLeft: '22px',
                      margin: 0,
                      color: '#555',
                      fontSize: '0.98rem'
                    }}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} style={{
                          marginBottom: '10px',
                          position: 'relative',
                          paddingLeft: '8px'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            top: '6px',
                            width: '5px',
                            height: '5px',
                            backgroundColor: '#ffd700',
                            borderRadius: '50%'
                          }}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended Capabilities */}
      <section style={{
        background: '#f8f9fc',
        padding: '90px 0',
        borderTop: '1px solid #e6ebee',
        borderBottom: '1px solid #e6ebee'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{
              color: '#0f3460',
              fontWeight: '700',
              fontSize: '2.5rem',
              marginBottom: '16px'
            }}>
              Extended Capabilities
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
              Full-spectrum technical services to support complex industrial projects
            </p>
          </div>

          <div className="row g-4">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                <div
                  style={{
                    background: '#ffffff',
                    padding: '28px 22px',
                    borderRadius: '16px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                    height: '100%',
                    
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    border: '1px solid #f0f4f8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 52, 96, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(135deg, #0f3460 0%, #1e56a0 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px',
                    flexShrink: 0,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{
                    color: '#222',
                    fontSize: '1rem',
                    fontWeight: '500',
                    lineHeight: '1.5'
                  }}>
                    {service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
     
    </div>
  );
};

export default ElectricalServices;