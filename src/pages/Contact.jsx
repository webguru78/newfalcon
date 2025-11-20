import React from 'react'
import Navbar from '../components/Navbar'
import ContactBreadcrum from '../HeavyEquipment/ContactBreadcrum'
import ContactForm from '../OverviewComponents/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactBreadcrum/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact