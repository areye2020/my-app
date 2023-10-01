import React, { useState } from "react"
import "./header.css"
import logo from "../pic/logo.png"
import Journey from "../Testimonial/journey"
import Home from "../Hero/Home"
import Resume from "../Resume/forHome"
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
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li onClick={() => changePage("home")}>Home</li>
              <li onClick={() => changePage("journey")}>Personal Journey</li>
              <li onClick={() => changePage("resume")}>Resume</li>
              <li onClick={() => changePage("contact")}>Contact</li>
              {/* <li>
                <a href='#portfolio'>portfolio</a>
              </li> */}
              {/* <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#clients'>blog</a>
              </li>
              <li>
                <a href='#blog'>portfolio</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li> */}
              {/* <li>
                <button className='home-btn'>BUY NOW</button>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      {currentPage === "home" && <Home />}
      {currentPage === "journey" && <Journey />}
      {currentPage === "resume" && <Resume />}
      {/* Add more conditionals for other components */}
      {currentPage === "contact" && <Contact />}
    </>
  )
}

export default Header