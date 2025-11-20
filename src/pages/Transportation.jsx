import React from 'react'
import Navbar from '../components/Navbar'
import TransportationServices from '../Blog/TransportationServices'
import Footer from '../components/Footer'
import EquipmentBreadcrum from '../EquipmentComponents/EquipmentBreadcrum'

const Transportation = () => {
  return (
    <div>
      <Navbar/>
      <EquipmentBreadcrum/>
      <TransportationServices/>
      <Footer/>
    </div>
  )
}

export default Transportation
