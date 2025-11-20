import React from 'react'
import Navbar from '../components/Navbar'
import EquipmentBreadcrum from '../EquipmentComponents/EquipmentBreadcrum'
import EquipmentServices from '../EquipmentComponents/EquipmentServices'
import Footer from '../components/Footer'

const Equipment = () => {
  return (
    <div>
      <Navbar/>
      <EquipmentBreadcrum/>
      <EquipmentServices/>
      <Footer/>
    </div>
  )
}

export default Equipment
