import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MERU DOCTOR'S PLAZA</h3>
          <p>Quality healthcare for all</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@merudoctorsplaza.com</p>
          <p>Phone: +254 712 345 678</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Meru Doctor's Plaza. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;