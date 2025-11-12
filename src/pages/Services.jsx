import React from 'react'
import Navbar from '../components/Navbar'
import ServiceBreadcrum from '../ServicesComponents/ServiceBreadcrum'
import Footer from '../components/Footer'
import OurServices from '../ServicesComponents/OurServices'
import Counter from '../components/Counter'
import Gallery from '../ServicesComponents/Gallery'

const Services = () => {
  return (
    <div style={{ overflow: "visible" }}>
        <Navbar/>
        <ServiceBreadcrum/>
        <OurServices/>
        <Counter/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Services