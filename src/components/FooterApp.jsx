import React from 'react'
import {Link} from 'react-router-dom'
import "../css/FooterStyle.css"
export const FooterApp = () => {
  return (
    <div id="footer-cont" className="container-fluid">
    <div className="d-flex text-white justify-content-between align-items-start flex-wrap">
      <div className="col-12 col-md-3 mb-4">
        <div id="logo-footer"></div>
      </div>
      <div className="container d-flex col-12 col-md-9 justify-content-end flex-wrap">
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
          <li className="d-flex align-items-center gap-3" id="social-icons">
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-youtube"></i></a>
            <a href=""><i className="bi bi-twitter"></i></a>
          </li>
        </ul>
      </div>
      <div className="container">
<p className='text-center mb-0 mt-2'>&copy; Todos los derechos reservados</p>
      </div>
    </div>
  </div>
  )
}
export default FooterApp