import React from "react";
import "../css/jj.css";

const CardSongApp = (props) => {
  const { cancion, cover } = props.cancion;

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={cover}
          className="cover-disc card-img-top"
          alt={{ cancion }}
        />
      </div>
    </div>
  );
};

export default CardSongApp;
