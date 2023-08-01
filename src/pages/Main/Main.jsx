import React, { useEffect, useState } from 'react'
import SideBar from '../../components/NavSideBar/SideBar'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
import Category from '../../components/CategoryScrollBar/Category'
import Projects from '../../components/GeographyProjects/Projects'


export default function Main() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bottomBlockRef = React.useRef(null);
  return (
    <>
      <SideBar />
      <Home bottomBlockRef={bottomBlockRef} />
      <Category bottomBlockRef={bottomBlockRef} />
      <Projects />
      <Footer />
    </>
  )
}
