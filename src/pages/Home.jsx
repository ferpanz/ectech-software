import React from 'react'
import { Helmet } from 'react-helmet-async'
import logo from './../assets/logos/ectech-logo.png'
import { useEffect } from 'react'
import TechGrid from '../components/TechGrid'
import ClientesCarrusel from '../components/ClientesCarrusel'

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

      <TechGrid />
      <ClientesCarrusel />
    </>
  )
}

export default Home
