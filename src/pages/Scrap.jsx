import React from 'react'
import Navbar from '../components/Navbar'
import RecruitmentBreadcrum from '../RecruitmentComponents/RecruitmentBreadcrum'
import ScrapTabs from '../ScrapComponents/ScrapTabs'
import Footer from '../components/Footer'

const Scrap = () => {
  return (
    <div>
      <Navbar/>
      <RecruitmentBreadcrum/>
      <ScrapTabs/>
      <Footer/>
    </div>
  )
}

export default Scrap
