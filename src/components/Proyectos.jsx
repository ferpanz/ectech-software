import React from "react"

function Projectos({ title, client, date, images, reverse }) {
  const carouselId = `carousel-${title.replace(/\s+/g, "")}`

  return (
    <>
    
    <div className="row align-items-center my-5">

      {/* Carrusel */}
      <div 
        className={`col-md-6 mb-4 mb-md-0 ${reverse ? "order-md-2" : ""}`} 
        data-aos="fade-up"
      >
        <div id={carouselId} className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
          <div className="carousel-inner rounded shadow">

            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                  style={{ height: "300px", objectFit: "cover" }}
                />
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* Texto */}
      <div 
        className={`col-md-6 ${reverse ? "order-md-1" : ""}`} 
        data-aos="fade-up" 
        data-aos-delay="100"
      >
        <h3 className="fw-bold">{title}</h3>
        <p className="mb-1"><strong>Cliente:</strong> {client}</p>
        <p className="mb-1"><strong>Fecha:</strong> {date}</p>
      </div>

    </div>
    </>
  )
}

export default Projectos