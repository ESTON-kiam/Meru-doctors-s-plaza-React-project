import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Meru Doctor's Plaza Logo" className="logo" />
        <h1>MERU DOCTOR'S PLAZA</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;