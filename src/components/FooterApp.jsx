import React from 'react'
import {Link} from 'react-router-dom'

export const FooterApp = () => {
  return (
    <div className="container">
    <div className="d-flex bg-dark text-white justify-content-between align-items-start flex-wrap">
      
      {/* Texto como logo */}
      <div className="col-12 col-md-3 mb-4">
        <h4 className="fw-bold">RollingMusic</h4>
      </div>
  
     
      <div className="d-flex col-12 col-md-9 justify-content-end flex-wrap">
        <ul className="list-unstyled col-12 col-md-4 mb-4">
          <li className="fw-bold mb-2">Rolling Music</li>
          <li>Descubre, escucha y vibra con la mejor música.</li>
        </ul>
  
        <ul className="list-unstyled col-12 col-md-4 mb-4">
          <li className="fw-bold mb-2">Sobre Nosotros</li>
          <li>Quienes Somos</li>
        </ul>
        <ul className="list-unstyled col-12 col-md-4 mb-4">
          <li className="fw-bold mb-2">Síguenos</li>
          <li className="d-flex align-items-center gap-3">
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-youtube"></i></a>
          <a href="#"><i className="bi bi-twitter"></i></a>
          </li>
        </ul>
      </div>
      <div className='container'>
<p className='text-center mb-0 mt-2'>&copy; Todos los derechos reservados</p>
    </div>

    </div>
  </div>
  
  )
}

export default FooterApp