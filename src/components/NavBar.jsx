import React from 'react'
import logo from '../assets/logos/ectech-logo.png'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
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
                    <NavLink className="dropdown-item" to="/soporte-hardware">
                      Soporte hardware
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/networking">
                      Networking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/servidores">
                      Servidores
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/vpn">

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
                    <NavLink className="dropdown-item" to="/diseno-grafico">
                      Diseño gráfico
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/diseno-web">
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
                    <a className="dropdown-item" href="https://diseñar.com.ar" target="_blank" rel="noopener noreferrer">
                      Diseñar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://guepp.com.ar/" target="_blank" rel="noopener noreferrer">
                      GÜEPP!
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/productos">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sobre-nosotros">
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
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
