import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

const AddSongApp = (props) => {
  const { addSong } = props;
  const MySwal = withReactContent(Swal);
  const { register, handleSubmit, reset, setFocus } = useForm();

  const agregarCancion = (data) => {
    console.log(data);
    addSong(data);
    reset();
    setFocus("title");
    MySwal.fire({
      title: "¡Canción agregada con éxito!",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Agregar Canción</h2>
      <form onSubmit={handleSubmit(agregarCancion)}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Nombre de la canción</label>
            <input
              type="text"
              className="form-control"
              {...register("tituloCancion", { required: true })}
              placeholder="Ej: Alive"
            />
          </div>
          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Banda / Artista</label>
            <input
              type="text"
              className="form-control"
              {...register("artista", { required: true })}
              placeholder="Ej: Pearl Jam"
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Categoría</label>
            <select
              className="form-select"
              {...register("genero", { required: true })}
            >
              <option>Rock</option>
              <option>Pop</option>
              <option>Trap</option>
              <option>Reggae</option>
              <option>Otros</option>
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">URL de la portada</label>
            <input
              type="url"
              className="form-control"
              {...register("image", { required: true })}
              placeholder="https://ejemplo.com/portada.jpg"
              pattern="https://.*"
            />
          </div>

          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Spotify (iframe embed)</label>
            <input
              type=""
              className="form-control"
              {...register("spotifyUrl", { required: true })}
              placeholder="7Jh1bpe76CNTCgdgAdBw4Z"
            />
          </div>

          <div className="col-md-3 mb-4 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100">
              Guardar Canción
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSongApp;
