import React from 'react'
import ScaffoldingBreadcrum from '../Scaffolding/ScaffoldingBreadcrum'
import PlatformServices from '../Blog/PlatformServices'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Platform = () => {
  return (
    <div>
        <Navbar/>
      <ScaffoldingBreadcrum/>
      <PlatformServices/>
    <Footer/>
    </div>
  )
}

export default Platform
