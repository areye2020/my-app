import React, { useState } from "react";
import Header from "./Components/Head/Header";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonial from "./Components/Testimonial/Testimonial";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState("home");

  // Function to change the current page
  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <Header changePage={changePage} />
      {/* Conditionally render components based on the current page */}
      {currentPage === "home" && <Home />}
      {currentPage === "portfolio" && <Portfolio />}
      {currentPage === "resume" && <Resume />}
      {currentPage === "testimonial" && <Testimonial />}
      {currentPage === "blog" && <Blog />}
      {currentPage === "contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
