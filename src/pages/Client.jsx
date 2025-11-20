import React from 'react'
import Navbar from '../components/Navbar'
import ClientBreadcrum from '../HseComponents/ClientBreadcrum'
import Partner from '../components/Partner'
import Footer from '../components/Footer'

const Client = () => {
  return (
    <div>
        <Navbar/>
        <ClientBreadcrum/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default Client