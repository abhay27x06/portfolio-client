import React from "react";
import Navbar from './components/Navbar.js';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Skills from "./components/Skills.js";
import Contact from "./components/Contact.js";
function App() {
  return (
    <>
    <Navbar / >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}
export default App;
