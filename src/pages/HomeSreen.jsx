import React from "react";
import FavSongScreen from "./FavSongScreen";
import SongScreen from "./SongScreen";

const HomeSreen = () => {
  return (
    <>
      <h2>Nuestros favoritos para vos</h2>
      <FavSongScreen />
      <h2>Nuestra biblioteca para vos</h2>
      <SongScreen />
    </>
  );
};

export default HomeSreen;
