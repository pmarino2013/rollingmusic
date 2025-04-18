import React from "react";

const SongScreen = () => {
  const bajarCancion = JSON.parse(localStorage.getItem("songs")) || [];

  return (
    <>
      <h2 className="mx-3">Prueba de Librería</h2>

      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 g-2 mx-3 mb-5">
        {bajarCancion.map((cancion, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={
                  cancion.image ||
                  "https://via.placeholder.com/300x300?text=Sin+imagen"
                }
                className="card-img-top"
                alt={`Portada de ${cancion.title}`}
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
                    <iframe
                      src={cancion.spotifyUrl}
                      width="100%"
                      height="80"
                      style={{ borderRadius: "8px" }}
                      allow="encrypted-media"
                      title={`Spotify ${cancion.title}`}
                    ></iframe>
                  </div>
                )}
                <button className="btn btn-outline-danger btn-sm mt-3">
                  Escuchar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SongScreen;
