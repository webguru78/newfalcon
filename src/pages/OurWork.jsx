import React from 'react'
import Navbar from '../components/Navbar'
import WorkBreadcrum from '../OverviewComponents/WorkBreadcrum'
import ProjectGallery from '../components/ProjectGallery'
import Footer from '../components/Footer'
import Working from '../components/Working'

const OurWork = () => {
  return (
    <div>
        <Navbar/>
        <WorkBreadcrum/>
        <Working/>
        <ProjectGallery/>
        <Footer/>
    </div>
  )
}

export default OurWork