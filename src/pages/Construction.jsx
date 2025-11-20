import React from 'react'
import Navbar from '../components/Navbar'
import EquipmentBreadcrum from '../EquipmentComponents/EquipmentBreadcrum'
import ConstructionServices from '../Blog/ConstructionServices'
import Footer from '../components/Footer'

const Construction = () => {
  return (
    <div>
      <Navbar/>
      <EquipmentBreadcrum/>
      <ConstructionServices/>
      <Footer/>
    </div>
  )
}

export default Construction
