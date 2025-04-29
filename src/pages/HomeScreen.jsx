import React from "react";
import FavSongScreen from "./FavSongScreen";
import SongApp from "../components/SongApp";

const HomeScreen = () => {
  return (
    <>
      <h3>Nuestros favoritos para vos</h3>
      <FavSongScreen />
      <h3>Nuestra biblioteca para vos</h3>
      <SongApp />
    </>
  );
};

export default HomeScreen;
