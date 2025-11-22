import React from 'react'
import Navbar from '../components/Navbar'
import OrganizationBreadcrum from '../OrganizationComponents/OrganizationBreadcrum'
import Chart from '../OrganizationComponents/Chart'
import ContactForm from '../OverviewComponents/ContactForm'
import Footer from '../components/Footer'

const Organization = () => {
  return (
    <div>
      <Navbar/>
      <OrganizationBreadcrum/>
      <Chart/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Organization
