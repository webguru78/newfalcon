import React from 'react'
import Navbar from '../components/Navbar'

import FabricationServices from '../Blog/FabricationServices'
import Footer from '../components/Footer'
import ContactForm from '../OverviewComponents/ContactForm'
import ContractBreadcrum from '../ContractComponents/ContractBreadcrum'

const Fabrication = () => {
  return (
    <div>
        <Navbar/>
        <ContractBreadcrum/>
        <FabricationServices/>
        <ContactForm/>
        <Footer/>
      
    </div>
  )
}

export default Fabrication
