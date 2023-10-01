import React, { useState, useEffect } from "react";
import "./header.css";

const Header = ({ changePage }) => {
  // State to manage the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Add a scroll listener for the fixed header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 100);
    });
  }, []);

  return (
    <header className={`header ${mobileMenuOpen ? "active" : ""}`}>
      <div className="container d_flex">
        <div className="logo">
          <span className="name">Adriana Reyes</span>
          <img alt="" />
        </div>
        <div className={`navlink ${mobileMenuOpen ? "active" : ""}`}>
          <ul className={mobileMenuOpen ? "nav-links-mobile" : "link f_flex uppercase"}>
            <li onClick={() => { changePage("home"); closeMobileMenu(); }}>Home</li>
            <li onClick={() => { changePage("portfolio"); closeMobileMenu(); }}>Portfolio</li>
            <li onClick={() => { changePage("resume"); closeMobileMenu(); }}>Resume</li>
            <li onClick={() => { changePage("testimonial"); closeMobileMenu(); }}>Testimonial</li>
            <li onClick={() => { changePage("blog"); closeMobileMenu(); }}>Blog</li>
            <li onClick={() => { changePage("contact"); closeMobileMenu(); }}>Contact</li>
          </ul>
          <button className="toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
