import React from 'react'
import Header from './components/header/Header'

import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
// import About from './components/about/About'
// import Services from './components/services/Services'
// import Testtimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
   
    <Nav/>
    <Header/>
    {/* <About/> */}
    <Experience/>
    {/* <Services/> */}
    <Portfolio/>
    {/* <Testtimonials/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App