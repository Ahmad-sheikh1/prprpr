import React, { useEffect } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import PolicyPrivacy from './Components/Policy-Privacy';
import TermsandConditions from './Components/TermsandConditions';


function App() {

  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        {/* <Route path='/portfolio' element={<Projects />} /> */}
        <Route path='/privacypolicy' element={<PolicyPrivacy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
      </Routes>

      <Footer />
    </React.Fragment>
  )
}

export default App
