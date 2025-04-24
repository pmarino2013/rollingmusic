import Modal from "react-bootstrap/Modal";

// traeer los datos con props desde favsonapp
function ModalListenApp({ smShow, handleClose, pista, cancion }) {
  console.log(cancion);

  return (
    <>
      <Modal
        size="sm"
        show={smShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">{`Escucha: ${cancion}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {pista ? (
              <iframe
                src={`https://open.spotify.com/embed/track/${pista}?utm_source=generator `}
                width="100%"
                height="352"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            ) : (
              <p>cargando</p>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalListenApp;
