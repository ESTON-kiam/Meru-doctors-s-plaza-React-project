import React from 'react';
import '../App.css';

function Departments() {
  // Sample department data
  const departments = [
    {
      id: 1,
      name: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and rehabilitation.',
      icon: '❤️'
    },
    {
      id: 2,
      name: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
      icon: '👶'
    },
    {
      id: 3,
      name: 'Orthopedics',
      description: 'Treatment for musculoskeletal system including bones, joints, and muscles.',
      icon: '🦴'
    },
    {
      id: 4,
      name: 'Neurology',
      description: 'Diagnosis and treatment of disorders of the nervous system.',
      icon: '🧠'
    },
    {
      id: 5,
      name: 'Dermatology',
      description: 'Care for skin, hair, and nail conditions.',
      icon: '💅'
    },
    {
      id: 6,
      name: 'Gynecology',
      description: 'Women\'s health services including reproductive system care.',
      icon: '🌸'
    }
  ];

  return (
    <div className="departments">
      <section className="departments-hero">
        <h2>Our Medical Departments</h2>
        <p>Specialized care for all your health needs</p>
      </section>
      
      <section className="departments-content">
        <div className="departments-grid">
          {departments.map((dept) => (
            <div key={dept.id} className="department-card">
              <div className="department-icon">{dept.icon}</div>
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Departments;