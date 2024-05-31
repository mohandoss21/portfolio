import HeroSection from "../HeroSection";
import React from 'react'
import Navbar from "../Navbar";
import MyPortFolio from "../MyPortfolio"
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Skills/>
        <AboutMe/>
        <MyPortFolio/>
        <ContactMe/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
