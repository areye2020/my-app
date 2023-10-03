import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Head/Header";
import Features from "./Components/Features/Features";
import Home from "./Components/Hero/Home";
import Resume from "./Components/Resume/Resume";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Journey from "./Components/Testimonial/journey";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/journey" element={<Journey />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* Add more routes for other pages as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
