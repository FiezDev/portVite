import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {} from "firebase/database";
import {} from "firebase/analytics";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";

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
