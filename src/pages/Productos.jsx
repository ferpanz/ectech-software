import React from "react"
import Proyectos from "../components/Proyectos"

function Productos() {
  return (
    <div className="container my-5">

      <h1 className="mb-5 text-center" data-aos="fade-up">
        Nuestros trabajos
      </h1>

      <Proyectos
        title="Sistema de Gestión Comercial"
        client="Empresa XYZ"
        date="2025"
        images={[
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        ]}
      />

      <Proyectos
        title="App de Turnos Online"
        client="Clínica Salud"
        date="2024"
        images={[
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        ]}
        reverse
      />

    </div>
  )
}

export default Productos
