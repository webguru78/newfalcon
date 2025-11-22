import React from 'react'
import Navbar from '../components/Navbar'
import RecruitmentBreadcrum from '../RecruitmentComponents/RecruitmentBreadcrum'
import ProcurementTabs from '../GeneralComponents/ProcurementTabs'
import Footer from '../components/Footer'

const General = () => {
  return (
    <div>
      <Navbar/>
      <RecruitmentBreadcrum/>
      <ProcurementTabs/>
      <Footer/>
    </div>
  )
}

export default General
