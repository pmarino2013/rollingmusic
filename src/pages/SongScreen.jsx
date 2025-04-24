import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SongScreen = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const downsongs = JSON.parse(localStorage.getItem("songs")) || [];
    const buscarId = downsongs.find((datos) => String(datos.id) === id);
    setSong(buscarId);
  }, [id]);

  if (!song) return <h3>Cargando canción...</h3>;

  return (
    <div>
      <h1>Tu canción seleccionada</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={
                      song.image ||
                      "https://via.placeholder.com/300x300?text=Sin+imagen"
                    }
                    className="img-fluid rounded-start"
                    alt={song.tituloCancion || "Canción"}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{song.tituloCancion}</h5>
                    <p className="card-text">
                      <strong>Artista:</strong> {song.artista}
                    </p>
                    <p className="card-text">
                      <strong>Género:</strong> {song.genero}
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Última actualización reciente
                      </small>
                    </p>
                    {song.spotifyUrl && (
                      <a
                        href={`https://open.spotify.com/track/${song.spotifyUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-success"
                      >
                        Escuchar en Spotify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongScreen;
