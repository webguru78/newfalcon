import React from 'react'
import Navbar from '../components/Navbar'
import ServiceBreadcrum from '../ServicesComponents/ServiceBreadcrum'
import Footer from '../components/Footer'
import OurServices from '../ServicesComponents/OurServices'
import Counter from '../components/Counter'
import ProjectGallery from '../components/ProjectGallery'

const Services = () => {
  return (
    <div style={{ overflow: "visible" }}>
        <Navbar/>
        <ServiceBreadcrum/>
        <OurServices/>
        <Counter/>
        <ProjectGallery/>
        <Footer/>
    </div>
  )
}

export default Services