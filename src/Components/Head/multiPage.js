import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import Home from "../Hero/Home"
import Features from "../Features/Features"
import Resume from "../Resume/Resume"
import Blog from "../Blog/Blog"
import Testimonial from "../Testimonial/Testimonial"
import Contact from "../Contact/Contact"

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

    // State to manage the current page
    const [currentPage, setCurrentPage] = useState("home");

    // Function to change the current page
    const changePage = (pageName) => {
      setCurrentPage(pageName);
    };

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img alt='' />
          </div>

          <div className='navlink'>
            {/* <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              
            </ul> */}
             {/* Navigation */}
          <nav>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              <li onClick={() => changePage("home")}>Home</li>
              <li onClick={() => changePage("features")}>Personal Journey</li>
              <li onClick={() => changePage("resume")}>Resume</li>
              <li onClick={() => changePage("blog")}>Projects & Proficiencies</li>
              <li onClick={() => changePage("testimonial")}>Life Beyond CS</li>
              <li onClick={() => changePage("contact")}>Contact</li>
            </ul>
          </nav>

          {/* 
          -home
          -personal journey
          -resume
          -projects & profiencies
          -life beyond CS
          -contact
          */}

          {/* Conditionally render components based on the current page */}
          {currentPage === "home" && <Home />}
          {currentPage === "features" && <Features />}
          {currentPage === "resume" && <Resume />}
          {currentPage === "blog" && <Blog />}
          {currentPage === "testimonial" && <Testimonial />}
          {currentPage === "contact" && <Contact />}

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header