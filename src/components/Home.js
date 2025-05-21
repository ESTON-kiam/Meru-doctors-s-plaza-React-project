import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Your Health is Our Priority</h2>
          <p>Providing exceptional healthcare services to the Meru community</p>
          
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <img src="/images/emergency-icon.png" alt="Emergency" />
          <h3>24/7 Emergency</h3>
          <p>Our emergency department is open round the clock</p>
        </div>
        <div className="feature-card">
          <img src="/images/appointment-icon.png" alt="Appointments" />
          <h3>Easy Appointments</h3>
          <p>Book your doctor's appointment online</p>
        </div>
        <div className="feature-card">
          <img src="/images/doctor-team.jpg" alt="Specialists" />
          <h3>Expert Specialists</h3>
          <p>Team of highly qualified medical professionals</p>
        </div>
      </section>
    </div>
  );
}

export default Home;