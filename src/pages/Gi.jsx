import React from 'react'
import Navbar from '../components/Navbar'
import ScaffoldingBreadcrum from '../Scaffolding/ScaffoldingBreadcrum'
import GiServices from '../Blog/GiServices'
import Footer from '../components/Footer'

const Gi = () => {
  return (
    <div>
      <Navbar/>
      <ScaffoldingBreadcrum/>
      <GiServices/>
      <Footer/>
    </div>
  )
}

export default Gi
