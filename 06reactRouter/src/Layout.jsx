import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// This Outlet use the Header and Footer as a base and passes the components accordingly (upper aur neeche ka same hi rakhega)
// Basically you can change things dynamically


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
