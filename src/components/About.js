import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h2>About Meru Doctor's Plaza</h2>
      </section>
      
      <section className="about-content">
        <div className="about-image">
          <img src="/images/hospital-building.jpg" alt="Meru Doctor's Plaza Building" />
        </div>
        <div className="about-text">
          <h3>Our Story</h3>
          <p>
            Meru Doctor's Plaza was established in 2010 with a vision to provide 
            comprehensive healthcare services to the Meru community. Over the years, 
            we have grown to become one of the most trusted healthcare providers 
            in the region.
          </p>
          <h3>Our Mission</h3>
          <p>
            To deliver exceptional patient-centered care through highly skilled 
            professionals, state-of-the-art technology, and compassionate service.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Patient-first approach</li>
            <li>Clinical excellence</li>
            <li>Integrity and transparency</li>
            <li>Community focus</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;