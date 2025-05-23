import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';
import './App.css';
import Departments from './components/Department ';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/BookAppointment" element={<BookAppointment />} /> 
            <Route path="/Departments" element={<Departments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;