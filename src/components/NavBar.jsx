import React from 'react'
import logo from '../assets/logos/ectech-logo.png'
import { NavLink } from 'react-router-dom'
import guepp from '../assets/logos/megafono.png'
import disenar from '../assets/logos/disenar-logo.png'


const NavBar = () => {
  const closeMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler')
    const navbarCollapse = document.querySelector('#navbarNavDropdown')
    if (navbarCollapse?.classList.contains('show')) {
      navbarToggler?.click()
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <img className="d-lg-none ms-3" src={logo} alt="Ectech" width="200" height="auto"></img>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-lg-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  aria-current="page"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios IT
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/soporte-hardware" onClick={closeMenu}>
                      Soporte hardware
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/networking" onClick={closeMenu}>
                      Networking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/servidores" onClick={closeMenu}>
                      Servidores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vpn" onClick={closeMenu}>

                      VPNs
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Diseño
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/diseno-grafico" onClick={closeMenu}>
                      Diseño gráfico
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/diseno-web" onClick={closeMenu}>
                      Diseño web
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Asociados
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="https://diseñar.com.ar" target="_blank" rel="noopener noreferrer"><img src={disenar} alt="Diseñar Logo" width="40" height="auto"/> Diseñar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://guepp.com.ar/" target="_blank" rel="noopener noreferrer"><img src={guepp} alt="Güepp Logo" width="40" height="auto"/> GÜEPP!
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productos" onClick={closeMenu}>
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre-nosotros" onClick={closeMenu}>
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto" onClick={closeMenu}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
