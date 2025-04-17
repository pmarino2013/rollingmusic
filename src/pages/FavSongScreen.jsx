import React from "react";
import CardSongApp from "../components/CardSongApp";
import { datosLocal } from "../data/datosLocal";

const FavSongScreen = () => {
  return (
    <div className="row row-cols-4 row-cols-md-4 row-cols-lg-4 g-2 mx-3">
      {datosLocal.map((cancion, index) => (
        <CardSongApp key={index} cancion={cancion} />
      ))}
    </div>
  );
};

export default FavSongScreen;
