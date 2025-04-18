import { useState } from "react";
import { datosLocal } from "../data/datosLocal";
// import ModalUpdateApp from "./ModalUpdateApp";

const TableSongApp = ({ songs, deleteSong, updateSong }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (song) => {
    setSelectedSong(song);
    setShow(true);
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Canción</th>
            <th scope="col">Artista</th>
            <th scope="col">Género</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosLocal.map((song) => (
            <tr key={song.id}>
              <th scope="row">{song.id}</th>
              <td>{song.title}</td>
              <td>{song.artista}</td>
              <td>{song.genero}</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => deleteSong(song)}
                    className="btn btn-danger"
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                  <button
                    onClick={() => handleShow(song)}
                    className="btn btn-warning"
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {show && (
        <ModalUpdateApp
          show={show}
          handleClose={handleClose}
          song={selectedSong}
          updateSong={updateSong}
        />
      )} */}
    </>
  );
};

export default TableSongApp;
