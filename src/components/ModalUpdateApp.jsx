import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

const ModalUpdateApp = (props) => {
  const { show, handleClose, songs, updateSong } = props;
  console.log(songs);
  // const { register, handleSubmit } = useForm();
  // const actualizarCancion = (datos) => {
  //   updateSong(cancion.id, datos);
  //   handleClose();
  // };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar Cancion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <form onSubmit={handleSubmit(actualizarCancion)}>
          <div className="mb-4">
            <label className="form-label fw-bold">Nombre del Producto</label>
            <input
              type="text"
              className="form-control form-control-lg"
              {...register("title", {
                required: true,
                value: songs.tituloCancion,
              })}
              placeholder="Ej: Smartphone X200"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-lg btn-warning">
              <i className="bi bi-save me-2"></i>Actualizar Producto
            </button>
          </div>
        </form> */}
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdateApp;
