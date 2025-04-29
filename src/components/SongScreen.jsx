import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SongScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [song, setSong] = useState(null);
  useEffect(() => {
    const downsongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSong(downsongs);
    console.log(downsongs);
  }, []);
  const buscarId = song.find((datos) => datos === id);
  console.log(buscarId);

  return <div>SongScreen</div>;
};

export default SongScreen;
