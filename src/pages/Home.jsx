import React from 'react'
import { Helmet } from 'react-helmet-async'
import logo from './../assets/logos/ectech-logo.png'
import { useEffect } from 'react'
import TechGrid from '../components/TechGrid'

function Home() {

  return (
    <>
      <Helmet>
        <title>Inicio | ECTECH Software</title>
        <meta name="description" content="Empresa de desarrollo de software" />
        <meta property="og:title" content="Inicio | ECTECH Software" />
        <meta property="og:description" content="Empresa de desarrollo de software" />
        <link rel="canonical" href="https://ectechso-ftware.com.ar/" />
      </Helmet>

      <div className="container-fluid bg-dark text-white d-flex align-items-center mt-3">
        <div className="container text-center">

          
          {/* Título */}
          <h1 className="fw-bold mb-3" data-aos="fade-up" data-aos-delay="100">
            Sitio en construcción
          </h1>

          {/* Descripción */}
          <p 
            className="lead text-light mb-4" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Estamos trabajando para brindarte soluciones de software modernas y eficientes.
            <br />
            Muy pronto vas a poder conocer todos nuestros servicios.
          </p>

          {/* Imagen */}
          <div data-aos="fade-up" data-aos-delay="300">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
              alt="Desarrollo de software"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>

          

        </div>
      </div>

    <TechGrid />
    </>
  )
}

export default Home
