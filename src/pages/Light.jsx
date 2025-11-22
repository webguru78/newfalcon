import React from 'react'
import EquipmentBreadcrum from '../EquipmentComponents/EquipmentBreadcrum'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewServices from '../Blog/NewServices'

const Light  = () => {
  return (
    <div>
      <Navbar/>
      <EquipmentBreadcrum/>
      <NewServices/>
      <Footer/>
    </div>
  )
}

export default Light 
