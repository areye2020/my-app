import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Head/Header";
import Home from "./Components/Hero/Home";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Journey from "./Components/Testimonial/journey";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes for other pages as needed */}
        {/* Default route to HOME */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
