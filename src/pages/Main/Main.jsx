import React, { useEffect, useState } from 'react'
import SideBar from '../../components/NavSideBar/SideBar'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
import Category from '../../components/CategoryScrollBar/Category'
import Projects from '../../components/GeographyProjects/Projects'
import PrivatePractice from '../../components/PrivatePractice/Practice'
import PublicPractice from '../../components/PublicPractice/Practice'


export default function Main() {
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bottomBlockRef = React.useRef(null);
  return (
    <>
      <SideBar />
      <Home bottomBlockRef={bottomBlockRef} />
      <Category />
      {/* <Consultation bottomBlockRef={bottomBlockRef} />
      <PublicPractice />
      <PrivatePractice /> */}
      <Projects bottomBlockRef={bottomBlockRef} />
      <Footer />
    </>
  )
}
