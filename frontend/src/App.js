import './app.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import React from 'react'
import Parallex from './components/Parallex/Parallex'
import Services from './components/servises/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/contact/Contact'
import { useRef } from 'react';
const App = () => {
  const targetSectionRef = useRef(null);

  const scrollToSection = () => {
    targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <section id='Home'>
        <Navbar/>
        <Hero scrollToSection={scrollToSection} />
      </section>
      <section id='Services'><Parallex type="services"/></section>
      <section ><Services/></section>
      <section id='Protfolio'><Parallex type="portfolio"/></section>
      <Portfolio/>
      <section id='Contact' ref={targetSectionRef}><Contact/></section>
    </div>
  )
}

export default App