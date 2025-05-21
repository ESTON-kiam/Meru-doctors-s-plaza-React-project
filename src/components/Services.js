import React from 'react';
import './App.css';

function Services() {
  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive care for adults with acute and chronic illnesses",
      icon: "💊"
    },
    {
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents",
      icon: "👶"
    },
    {
      title: "Surgery",
      description: "Advanced surgical procedures with minimal invasion",
      icon: "🩺"
    },
    {
      title: "Maternity Care",
      description: "Complete care for expectant mothers and newborns",
      icon: "🤰"
    },
    {
      title: "Dental Care",
      description: "Preventive and corrective dental treatments",
      icon: "🦷"
    },
    {
      title: "Laboratory Services",
      description: "Accurate diagnostic testing and analysis",
      icon: "🧪"
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <h2>Our Services</h2>
        <p>Comprehensive healthcare services under one roof</p>
      </section>
      
      <section className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services;