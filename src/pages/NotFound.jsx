import React from "react";
import "../css/notfound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <img
        src="http://www.comunidadism.es/wp-content/uploads/2014/02/errores-frecuentes-en-gesti%C3%B3n-de-proyectos.jpg"
        alt="404 Not Found"
        className="error-image"
      />
      <h1 className="error-title">404 - Página no encontrada</h1>
      <p className="description">
        Lo sentimos, la página que buscas no existe.
      </p>
    </div>
  );
};

export default NotFound;
