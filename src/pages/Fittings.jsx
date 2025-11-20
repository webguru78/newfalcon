import React from 'react'
import Navbar from '../components/Navbar'
import ScaffoldingBreadcrum from '../Scaffolding/ScaffoldingBreadcrum'
import FittingsService from '../Blog/FittingsService'
import Footer from '../components/Footer'

const Fittings = () => {
  return (
    <div>
      <Navbar/>
      <ScaffoldingBreadcrum/>
      <FittingsService/>
      <Footer/>
    </div>
  )
}

export default Fittings
