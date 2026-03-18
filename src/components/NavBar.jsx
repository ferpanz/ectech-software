import React from 'react'
import logo from '../assets/logos/ectech-logo.png'


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
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
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
                    <a className="dropdown-item" href="#">
                      Soporte hardware
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Networking
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Servidores
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      VPNs
                    </a>
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
                    <a className="dropdown-item" href="#">
                      Diseño gráfico
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Diseño web
                    </a>
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
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
