import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <img 
        src="http://www.comunidadism.es/wp-content/uploads/2014/02/errores-frecuentes-en-gesti%C3%B3n-de-proyectos.jpg" 
        alt="404 Not Found" 
       className="image"
      />
      <h1 className="title">404 - Página no encontrada</h1>
      <p className="description">Lo sentimos, la página que buscas no existe.</p>
      <a href="/" className="mt-6 text-blue-500 underline">Volver al inicio</a>
    </div>
  );
};

export default NotFound;