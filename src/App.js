import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Layout } from "./layout/Layout";
import { Contact } from './components/Contact';
import { Skills } from "./components/Skills";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Banner />
              <Skills />
            </>
          } />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
