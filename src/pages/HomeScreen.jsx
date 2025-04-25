import React from "react";
import FavSongScreen from "./FavSongScreen";
import SongApp from "../components/SongApp";

const HomeScreen = () => {
  return (
    <>
      <h2>Nuestros favoritos para vos</h2>
      <FavSongScreen />
      <h2>Nuestra biblioteca para vos</h2>
      <SongApp />
    </>
  );
};

export default HomeScreen;
