import React from "react";
import './css/app.css';
import './css/background.css'
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

import backgroundImg from './images/noise-2x.webp'


function App() {
  return (
    <div className="App">
      {/* <img className="backgroundImg" src={backgroundImg}></img> */}
      <Sidebar />

      <Routes>
        <Route path="/" element={[<Banner />, <Skills />]} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />


    </div>
  );
}

export default App;