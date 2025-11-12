import React from 'react'
import Navbar from '../components/Navbar'
import QualityBreadcrum from '../QualityComponents/QualityBreadcrum'
import Footer from '../components/Footer'
import QualityPolicy from '../QualityComponents/QualityPolicy'
import About from '../components/About'
import Partner from '../components/Partner'
import ContactForm from '../OverviewComponents/ContactForm'

const Quality = () => {
  return (
    <div style={{ overflow: "visible" }}>
      <Navbar/>
      <QualityBreadcrum/>
      <QualityPolicy/>
      <About/>
      <Partner/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Quality