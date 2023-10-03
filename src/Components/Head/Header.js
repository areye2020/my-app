import React, { useState } from "react";
import "./header.css"
import logo from "../pic/logo.png"
import { Link } from "react-router-dom";


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [mobile, setMobile] = useState(false);

  const closeMobileMenu = () => {
    setMobile(false);
  };

  return (
    <>
    <header className="header">
      <div className="container d_flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="navlink">
          <ul className={mobile ? "nav-links-mobile" : "link f_flex uppercase"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={closeMobileMenu}>
                Technologies
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {/* Add more navigation links for other pages */}
          </ul>

          <button className="toggle" onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <i className="fas fa-times close home-btn"></i>
            ) : (
              <i className="fas fa-bars open"></i>
            )}
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header