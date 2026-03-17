import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


const Layout = () => {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
        <Header />
        <NavBar />
        <Outlet />
        <Footer /> 
           
    </div>
  )
}

export default Layout
