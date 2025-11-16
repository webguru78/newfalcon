import React from 'react'
import Navbar from '../components/Navbar'
import ContractBreadcrum from '../ContractComponents/ContractBreadcrum'

import MechanicalServices from '../Blog/MechanicalServices'

const Mechanical = () => {
  return (
    <div>
        <Navbar/>
        <ContractBreadcrum/>
        <MechanicalServices/>
    </div>
  )
}

export default Mechanical