import React from 'react'
import Navbar from '../components/Navbar'
import ScaffoldingBreadcrum from '../Scaffolding/ScaffoldingBreadcrum'
import ScaffoldingServices from '../Blog/ScaffoldingServices'
import Footer from '../components/Footer'

const ScaffoldingDivsion = () => {
  return (
    <div>
      <Navbar/>
      <ScaffoldingBreadcrum/>
      <ScaffoldingServices/>
      <Footer/>
    </div>
  )
}

export default ScaffoldingDivsion
