import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SongScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const downsongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(downsongs);
    const ids = songs.map((song) => song.id);
  }, []);

  return (
    <h1>
      canciones con descripcion que vienen cuando hago click en una tarjeta
    </h1>
  );
};

export default SongScreen;
