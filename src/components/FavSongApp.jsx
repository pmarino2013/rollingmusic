import React from "react";
import { useState } from "react";
import "../css/jj.css";
import ModalListenApp from "./ModalListenApp";

const CardSongApp = (props) => {
  const { cancion, cover, pista } = props.cancion;

  const [smShow, setSmShow] = useState(false);

  // a la funcion handleSwhow le tengo que mandar el ifrmame que viene del js
  const handleShow = () => {
    setSmShow(true);
  };
  const handleClose = () => {
    setSmShow(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card h-100 p-2 border-none ">
              <img
                src={cover}
                onClick={() => handleShow()}
                className="cover-disc "
                alt={cancion}
              />
            </div>
          </div>
        </div>
      </div>
      {smShow && (
        <ModalListenApp
          smShow={smShow}
          handleClose={handleClose}
          pista={pista}
          cancion={cancion}
        />
      )}
    </>
  );
};

export default CardSongApp;
