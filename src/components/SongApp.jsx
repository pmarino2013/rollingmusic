import React from "react";
import { Link } from "react-router-dom";

const SongApp = () => {
  const bajarCancion = JSON.parse(localStorage.getItem("songs")) || [];

  const { id } = bajarCancion;
  return (
    <>
      <div className="col-md-6 mb-4 m-4">
        <label className="form-label fw-bold">Banda / Artista</label>
        <input
          type="search"
          className="form-control"
          placeholder="Buscar cancion"
        />
      </div>

      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 mx-3 mb-5">
        {bajarCancion.map((cancion, index, id) => (
          <div className="col" key={index}>
            <Link to={`/song/${id}`}>
              <div className="card h-100">
                <img
                  src={
                    cancion.image ||
                    "https://via.placeholder.com/300x300?text=Sin+imagen"
                  }
                  className="card-img-top"
                  alt={cancion.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{cancion.title}</h5>
                  <p className="card-text">
                    <strong>Artista:</strong> {cancion.artista}
                  </p>
                  <p className="card-text">
                    <strong>Género:</strong> {cancion.genero}
                  </p>
                  {cancion.spotifyUrl && (
                    <div className="mt-3">
                      {/* <iframe
                        src={cancion.spotifyUrl}
                        width="100%"
                        height="80"
                        style={{ borderRadius: "8px" }}
                        allow="encrypted-media"
                        title={`Spotify ${cancion.title}`} verrr
                      ></iframe> */}{" "}
                      verrr
                    </div>
                  )}
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
