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
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
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
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechGrid
