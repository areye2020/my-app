import React, { useEffect, useState } from "react";
import Header from "./Components/Head/Header";
import Features from "./Components/Features/forHome";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import Journey from "./Components/Testimonial/journey";
import "./App.css";
import "./Components/Head/header.css";

function App() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });

  // Toggle Menu
  const [Mobile, setMobile] = useState(false);

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Function to change the current page
  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <span className="name">Adriana Reyes</span>
            <img alt="" />
          </div>
          <ul>
            <li onClick={() => changePage("home")}>Home</li>
            <li onClick={() => changePage("journey")}>Personal Journey</li>
            <li onClick={() => changePage("resume")}>Resume</li>
            {/* Add more navigation items here */}
            <li onClick={() => changePage("contact")}>Contact</li>
          </ul>
        </div>
      </header>
      {/* Conditionally render components based on the current page */}
      {currentPage === "home" && <Home />}
      {currentPage === "journey" && <Journey />}
      {currentPage === "resume" && <Resume />}
      {/* Add more conditionals for other components */}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
