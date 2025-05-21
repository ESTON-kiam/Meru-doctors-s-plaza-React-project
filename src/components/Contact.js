import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <h2>Contact Us</h2>
        <p>We're here to help and answer any questions you might have</p>
      </section>
      
      <section className="contact-content">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> 123 Medical Street, Meru, Kenya</p>
          <p><strong>Phone:</strong> +254 712 345 678</p>
          <p><strong>Email:</strong> info@merudoctorsplaza.com</p>
          <p><strong>Emergency:</strong> +254 723 456 789</p>
          
          <h3>Opening Hours</h3>
          <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
          <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Sunday:</strong> Emergency services only</p>
        </div>
        
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;