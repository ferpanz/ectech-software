import React from 'react'
import logo from '../assets/logos/ectech-logo.png'
import guepp from '../assets/logos/guepp sin fondo.png'
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
                <img className="bi me-2" width="100" height="auto" aria-hidden="true" src={guepp} alt="Guepp Logo">
                </img>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <div className="row row-cols-3">
                <div className="col mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col mb-3">
                  <h5>Section</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Features</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">Pricing</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">FAQs</a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-body-secondary">About</a>
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
