import React from "react";
import FavSongApp from "../components/FavSongApp";
import { datosLocal } from "../data/datosLocal";

const FavSongScreen = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 g-2 mx-3">
      {datosLocal.map((cancion, index) => (
        <FavSongApp key={index} cancion={cancion} />
      ))}
    </div>
  );
};

export default FavSongScreen;
