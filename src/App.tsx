import React from "react";

import { initializeApp } from "firebase/app";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {} from "firebase/database";
import {} from "firebase/analytics";

import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Works from "./pages/works/Works";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
