import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { useAOS } from '../hooks/useAOS'
import EnObra from '../components/EnObra'


const Layout = () => {
  const location = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  useAOS()
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
        <Header />
        <NavBar />
        <EnObra />
        <Outlet />
        <Footer /> 
           
    </div>
  )
}

export default Layout
