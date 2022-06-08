import React from 'react'

import { initializeApp } from 'firebase/app';
import { } from 'firebase/database';
import { } from 'firebase/analytics';

import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'

const App = () => {
  return (
    <>
   
    <Nav/>
    <About/>
    <Skills/>
    {/* <Services/> */}
    <Portfolio/>
    {/* <Testtimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App