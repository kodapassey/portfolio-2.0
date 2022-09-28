import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Layout } from "./layout/Layout";
import { Contact } from './components/Contact';
import { Skills } from "./components/Skills";
import { Portfolio } from './components/Portfolio'

import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { faA, faD, faK, faO } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio-2.0" element={<Layout />}>
          <Route index element={
            <>
              <Banner />
              <Skills />
            </>
          } />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>


      <MDBFooter className='text-center' color='white'>
        <MDBContainer>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1'>
              <FontAwesomeIcon icon={faK} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1'>
              <FontAwesomeIcon icon={faO} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1'>
              <FontAwesomeIcon icon={faD} />
            </MDBBtn>

            <MDBBtn outline color="light" floating className='m-1'>
              <FontAwesomeIcon icon={faA} />
            </MDBBtn>

          </section>

          <section>
            <p>
              Thank you so much for visiting my portfolio page! Can't wait to work with you soon!
            </p>
          </section>
        </MDBContainer>
      </MDBFooter>
    </>
  );
}

export default App;
