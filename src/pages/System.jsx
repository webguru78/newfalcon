import React from 'react'
import Navbar from '../components/Navbar'
import ScaffoldingBreadcrum from '../Scaffolding/ScaffoldingBreadcrum'
import SystemServices from '../Blog/SystemServices'
import Footer from '../components/Footer'

const System = () => {
  return (
    <div>
        <Navbar/>
        <ScaffoldingBreadcrum/>
        <SystemServices/>
        <Footer/>
      
    </div>
  )
}

export default System
