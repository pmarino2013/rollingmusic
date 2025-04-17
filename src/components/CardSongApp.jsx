import React from "react";

const CardSongApp = (props) => {
  const { cancion, artista, genero, cover, pista } = props.cancion;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={cover}
          className="card-img-top"
          alt={`Portada de ${cancion}`}
        />
        <div className="card-body">
          <h5 className="card-title">{cancion}</h5>
          <p className="card-text mb-1">
            <strong>Artista:</strong> {artista}
          </p>
          <p className="card-text">
            <strong>Género:</strong> {genero}
          </p>
          <div className="mt-3">
            <iframe
              src={`https://open.spotify.com/embed/track/${pista}?utm_source=generator`}
              width="100%"
              height="80"
              style={{ borderRadius: "8px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSongApp;
