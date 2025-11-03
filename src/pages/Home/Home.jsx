// import React from 'react'
import CasesSection from '../../components/Main/CasesSection'
import MainFile from '../../components/Main/MainFile'
import MainFooter from '../../components/Main/MainFooter'
import MainGallery from '../../components/Main/MainGallery'
import MainSectionB from '../../components/Main/MainSectionB'


const Home = () => {
  return (
    <div>
      <MainFile />
      <MainFooter />
      <MainSectionB />
      <MainGallery />
      <CasesSection />
      
    </div>
  )
}

export default Home