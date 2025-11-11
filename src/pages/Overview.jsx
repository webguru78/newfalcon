import React from 'react'
import Breadcrum from '../OverviewComponents/Breadcrum'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Counter from '../components/Counter'
import Vision from '../components/Vision'
import ContactForm from '../OverviewComponents/ContactForm'
import CustomCursor from '../components/Cursor/CustomCursor'

const Overview = () => {
  return (
    <div>
      <CustomCursor/>
        <Navbar/>
        <Breadcrum />
        <About/>
        <Vision/>
        <Counter/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Overview