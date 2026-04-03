import React from 'react'
import htmlLogo from '../assets/tecnologias/html.png'
import jsLogo from '../assets/tecnologias/js.png'
import kotlinLogo from '../assets/tecnologias/kotlin.png'
import javaLogo from '../assets/tecnologias/java.png'
import nodejsLogo from '../assets/tecnologias/nodejs.png'
import dockerLogo from '../assets/tecnologias/docker.png'
import ubuntuLogo from '../assets/tecnologias/ubuntu.png'
import kaliLogo from '../assets/tecnologias/kali.png'

const TechGrid = () => {
  return (
    <>
      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">Tecnologías</h2>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        >
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
            <img
              src={htmlLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                HTML
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
            <img
              src={jsLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                JavaScript
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
            <img
              src={kotlinLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Kotlin
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
            <img
              src={javaLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                JAVA
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
            <img
              src={nodejsLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Node JS
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="600">
            <img
              src={dockerLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Docker
              </h3>
              
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="700">
           <img
              src={ubuntuLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Ubuntu
              </h3>
             
            </div>
          </div>
          <div class="col d-flex align-items-center" data-aos="fade-up" data-aos-delay="800">
            <img
              src={kaliLogo}
              class="img-fluid text-body-secondary flex-shrink-0 me-3"
              width="60"
              height="auto"
              aria-hidden="true"
            >           
            </img>
            <div>
              <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                Kali Linux
              </h3>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechGrid
