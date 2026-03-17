import React from 'react'
import { Helmet } from 'react-helmet-async'

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
      <h1 className='bg-dark text-white p-3'>Home</h1>
      
    </>
  )
}

export default Home
