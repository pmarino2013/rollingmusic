import React from "react";
import FavSongScreen from "./FavSongScreen";
import SongApp from "../components/SongApp";

const HomeScreen = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row mb-4">
          <h2>Nuestros favoritos para vos</h2>
          <FavSongScreen />
        </div>
        <div className="row mb-4">
          <h2>Nuestra biblioteca para vos</h2>
          <SongApp />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
