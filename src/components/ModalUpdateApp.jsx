import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

const ModalUpdateApp = (props) => {
  const { show, handleClose, selectedSong, updateSong } = props;
  console.log(selectedSong);

  const { register, handleSubmit } = useForm();
  const actualizarCancion = (datos) => {
    updateSong(selectedSong.id, datos);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Cancion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(actualizarCancion)}>
          <div className="mb-4">
            <label className="form-label fw-bold">Nombre de la Canción</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("tituloCancion", {
                required: true,
                value: selectedSong.tituloCancion,
              })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Artista/Banda</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("artista", {
                required: true,
                value: selectedSong.artista,
              })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Genero</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("genero", {
                required: true,
                value: selectedSong.genero,
              })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">URL de la Imagen</label>

            <input
              type="url"
              className="form-control"
              {...register("image", {
                required: true,
                value: selectedSong.image,
              })}
              pattern="https://.*"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Codigo Spotify</label>

            <input
              type=""
              className="form-control"
              {...register("spotifyUrl", {
                required: true,
                value: selectedSong.spotifyUrl,
              })}
              pattern="[A-Za-z0-9]+"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-lg btn-warning">
              <i className="bi bi-save me-2"></i>Actualizar Cancion
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdateApp;
