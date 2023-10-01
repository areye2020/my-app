import React, { useEffect, useState } from "react";
import Header from "./Components/Head/Header"
import Features from "./Components/Features/Features"
import Home from "./Components/Hero/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Resume from "./Components/Resume/Resume"
import Testimonial from "./Components/Testimonial/Testimonial"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import "./App.css"

function App() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Function to change the current page
  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  const [Mobile, setMobile] = useState(false)


  return (

    
    <div className="App">
      {/* Navigation */}
      <nav>
        <ul>
          <li onClick={() => changePage("home")}>Home</li>
          <li onClick={() => changePage("features")}>Features</li>
          <li onClick={() => changePage("resume")}>Resume</li>
          <li onClick={() => changePage("blog")}>Blog</li>
          <li onClick={() => changePage("testimonial")}>Testimonial</li>
          <li onClick={() => changePage("contact")}>Contact</li>
        </ul>
      </nav>

      {/* Conditionally render components based on the current page */}
      {currentPage === "home" && <Home />}
      {currentPage === "features" && <Features />}
      {currentPage === "resume" && <Resume />}
      {currentPage === "blog" && <Blog />}
      {currentPage === "testimonial" && <Testimonial />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
