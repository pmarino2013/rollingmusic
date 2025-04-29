import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SongApp = () => {
  const [bajarCancion, setBajarCancion] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cancionesFiltradas, setCancionesFiltradas] = useState([]);

  useEffect(() => {
    const canciones = JSON.parse(localStorage.getItem("songs")) || [];
    setBajarCancion(canciones);
    setCancionesFiltradas(canciones);
  }, []);

  // buscador

  useEffect(() => {
    const filtradas = bajarCancion.filter(
      (cancion) =>
        cancion.tituloCancion
          .toLowerCase()
          .includes(inputValue.toLowerCase()) ||
        cancion.artista.toLowerCase().includes(inputValue.toLowerCase())
    );
    setCancionesFiltradas(filtradas);
  }, [inputValue, bajarCancion]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="col-12 col-md-6 mb-4 m-4">
        <label className="form-label fw-bold">
          Busca tu cancion o artista favorito
        </label>
        <input
          type="search"
          className="form-control"
          placeholder="Buscar canción"
          value={inputValue}
          onChange={handleChange}
        />
      </div>

      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 mx-3 mb-5">
        {cancionesFiltradas.map((cancion, index) => (
          <div className="col" key={index}>
            <Link to={`/song/${cancion.id}`}>
              <div className="card h-100">
                <img
                  src={
                    cancion.image ||
                    "https://via.placeholder.com/300x300?text=Sin+imagen"
                  }
                  className="card-img-top"
                  alt={cancion.tituloCancion}
                />
                <div className="card-body">
                  <h5 className="card-title">{cancion.tituloCancion}</h5>
                  <p className="card-text">{cancion.artista}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SongApp;
