import React from 'react';
import '../index.css';

function BookAppointment() {
  return (
    <div className="book-appointment">
      <section className="appointment-hero">
        <h2>Book an Appointment</h2>
      </section>
      
      <section className="appointment-content">
        <div className="appointment-form">
          <h3>Schedule Your Visit</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="doctor">Select Doctor</label>
              <select id="doctor" name="doctor" required>
                <option value="">-- Select a Doctor --</option>
                <option value="dr-smith">Dr. Smith (General Physician)</option>
                <option value="dr-johnson">Dr. Johnson (Cardiologist)</option>
                <option value="dr-williams">Dr. Williams (Pediatrician)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" name="date" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Notes</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
        </div>
        
        <div className="appointment-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Phone:</strong> +254 700 123456<br />
            <strong>Email:</strong> appointments@merudoctors.co.ke<br />
            <strong>Address:</strong> 123 Medical Plaza, Meru Town
          </p>
          
          <h3>Working Hours</h3>
          <p>
            Monday - Friday: 8:00 AM - 5:00 PM<br />
            Saturday: 9:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </section>
    </div>
  );
}

export default BookAppointment;