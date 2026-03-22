import React from 'react'
import logo from '../assets/logos/ectech-logo.png'
import guepp from '../assets/logos/megafono.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-5 my-5 border-top">
          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <NavLink
                to="/"
                className="d-flex align-items-center mb-3"
                aria-label="ectech logo"
              >
                <img className="bi me-2" width="100" height="auto" aria-hidden="true" src={logo} alt="Ectech Logo">
                </img>
              </NavLink>
              <p className="text-body-secondary">&copy; 2025 - Power by ECTECH</p>
              <a href="https://guepp.com.ar/" target='_blanc'>
                <img className="bi me-2 mt-4" width="70" height="auto" aria-hidden="true" src={guepp} alt="Guepp Logo">
                </img>
              </a>
              <p className="text-body-secondary">GÜEPP! - WEB DESING</p>
            </div>
            <div className="col-12 col-md-8">
              <div className="row row-cols-3">
                <div className="col mb-3">
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <NavLink to="/" className="nav-link p-0 text-body-secondary">Inicio</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/productos" className="nav-link p-0 text-body-secondary">Productos</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/sobre-nosotros" className="nav-link p-0 text-body-secondary">Sobre Nosotros</NavLink>
                    </li>
                  </ul>
                  <h5>Diseño</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <NavLink to="/diseno-grafico" className="nav-link p-0 text-body-secondary">Diseño gráfico</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/diseno-web" className="nav-link p-0 text-body-secondary">Diseño web</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col mb-3">
                  <h5>Servicios IT</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <NavLink to="/soporte-hardware" className="nav-link p-0 text-body-secondary">Soporte Hardware</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/networking" className="nav-link p-0 text-body-secondary">Networking</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/servidores" className="nav-link p-0 text-body-secondary">Servidores</NavLink>
                    </li>
                    <li className="nav-item mb-2">
                      <NavLink to="/vpn" className="nav-link p-0 text-body-secondary">VPNs</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col mb-3">
                  <h5>Contactos</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <i class="bi bi-telephone-fill p-0 text-body-secondary"> 3571601870</i>
                    </li>
                    <li className="nav-item mb-2">
                      <i class="bi bi-telephone-fill p-0 text-body-secondary"> 3571601870</i>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="mailto:ectech-sofware@test.com.ar" className='nav-link p-0 text-body-secondary'><i class="bi bi-envelope-fill"> ectech-sofware@test.com.ar</i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
