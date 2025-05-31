import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-placeholder">LOGO</div>
      <div className="company-name">
        KMC Media Tech Solutions
      </div>
      <nav className="nav-menu">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#courses">Courses</a>
        <a href="#website">Website Creation</a>
        <a href="#contact">Contact</a>
        <a href="#enroll" className="enroll-btn">Enroll Now</a>
      </nav>
    </header>
  );
};

export default Header;
