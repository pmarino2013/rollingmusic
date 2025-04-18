import React from "react";
import { Link } from "react-router-dom";
import SongScreen from "../pages/SongScreen";
import CardSongApp from "./FavSongApp";

const SongApp = () => {
  const bajarCancion = JSON.parse(localStorage.getItem("songs")) || [];
  console.log(bajarCancion);

  const { id } = bajarCancion;

  return (
    <>
      <h2 className="mx-3">Prueba de Librería</h2>
      <CardSongApp />
    </>
  );
};

export default SongApp;
