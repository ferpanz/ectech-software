import React from 'react'
import avatar from './../assets/logos/avatar.jpg'

function SobreNosotros() {
  return (
    <>
      
        <div class="container-fluid bg-dark-subtle">
          <div class="row p-5">
            <div class="col-md-6 text-center justify-content-center">
              <img class="rounded-circle mb-2 mt-3" height="140" width="140" src={avatar} alt="foto perfil"></img>
              <h2 class="fw-normal">CEO</h2>
              <h3 class="fw-semibold" >Emiliano Gerardo Pérez</h3>
              <p class="mb-0">Programador especializado en backend cuántico</p>
            </div>
            <div class="col-md-6 text-center justify-content-center">
              <img class="rounded-circle mb-2 mt-3" height="140" width="140" src={avatar} alt="foto perfil"></img>
              <h2 class="fw-normal">CEO</h2>
              <h3 class="fw-semibold">Pepito Juárez</h3>
              <p class="mb-0">Programador especializado en frontend cuántico</p>
            </div>
          </div>
      </div>

    </>
  )
}

export default SobreNosotros
