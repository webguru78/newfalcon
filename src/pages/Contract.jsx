import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContractBreadcrum from '../ContractComponents/ContractBreadcrum'
import ServicesGrid from '../ContractComponents/ServicesGrid'

const Contract = () => {
  return (
    <div>
        <Navbar/>
        <ContractBreadcrum/>
        <ServicesGrid/>
        <Footer/>
    </div>
  )
}

export default Contract