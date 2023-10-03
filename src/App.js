import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Components/Head/Header";
import Features from "./Components/Features/Features";
import Home from "./Components/Hero/Home";
import Resume from "./Components/Resume/Resume";
import Blog from "./Components/Blog/Blog";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
      <Testimonial />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
