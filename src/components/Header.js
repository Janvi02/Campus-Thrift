import React from 'react';
import './NavBar.css';  // Assuming you have a CSS file for the NavBar

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/assets/logo.png" alt="Campus Thrift Logo" className="logo" />
        <span className="brand-name">CampusThrift</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/how-it-works">How It Works</a></li>
        <li><a href="/login" className="login-btn">Login/Signup</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;

