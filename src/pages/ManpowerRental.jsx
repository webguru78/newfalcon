import React from 'react'
import Navbar from '../components/Navbar'
import RecruitmentBreadcrum from '../RecruitmentComponents/RecruitmentBreadcrum'
import ManpowerTabs from '../ManpowerComponents/ManpowerTabs'
import Footer from '../components/Footer'

const ManpowerRental = () => {
  return (
    <div>
        <Navbar/>
        <RecruitmentBreadcrum/>
      <ManpowerTabs/>
      <Footer/>
    </div>
  )
}

export default ManpowerRental
