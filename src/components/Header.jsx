import React from 'react'
import logo from '../assets/logos/ectech-logo.png'

function Header() {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" width="200" class="d-inline-block align-text-top"></img>
      
    </a>
  </div>
</nav>
  )
}

export default Header
