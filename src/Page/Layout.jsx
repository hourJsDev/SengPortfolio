import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import HomeDrawer from './Home/HomeDrawer'
import { useGlobalContext } from '../Context'
import HomeModal from './Home/HomeModal'

const Layout = () => {
  const {setOpenNav} = useGlobalContext()
  const location = useLocation()
  useEffect(()=>{
    setOpenNav(false)
  },[location.pathname])
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <HomeDrawer/>
      <HomeModal/>
    </div>
  )
}

export default Layout
