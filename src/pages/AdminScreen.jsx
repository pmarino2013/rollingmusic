import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AddSongApp from "../components/AddSongApp";
import TableSongApp from "../components/TableSongApp";

const AdminScreen = () => {
  const MySwal = withReactContent(Swal);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const storedSongs = JSON.parse(localStorage.getItem("songs")) || [];
    setSongs(storedSongs);
  }, []); /* baja del localsorage el array si es que tiene algo sino lo inicia vacio*/

  // FUncion para subir tema
  const addSong = (datos) => {
    const id = new Date().getTime();
    const newSong = [...songs, { id, ...datos }];
    setSongs(newSong);
    localStorage.setItem("songs", JSON.stringify(newSong));
  };

  // FUncion para eliminar tema
  const deleteSong = (song) => {
    const cancionBorrar = songs.filter((songs) => songs.id !== song.id);
    console.log(song);
    MySwal.fire({
      title: `Esta seguro que quiere eliminar: ${song.tituloCancion}`,
      showDenyButton: true,
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        setSongs(cancionBorrar);
        localStorage.setItem("songs", JSON.stringify(cancionBorrar));
      }
    });
  };

  // // FUncion para modificar tema

  const updateSong = (id, datos) => {
    const index = songs.findIndex(
      (song) => song.id === id
    ); /*devuelve la posicion */
    const songsLocal = [
      ...songs,
    ]; /* hacemos una copia de la variable de estado*/
    songsLocal[index] = {
      ...songsLocal[index],
      ...datos,
    }; /* guardamos variable nueva mas cambios*/
    setSongs(songsLocal); /* actualizamos variable de estado*/

    localStorage.setItem(
      "songs",
      JSON.stringify(songsLocal)
    ); /* subimos al localstorage*/
  };

  return (
    <>
      <h1>Administrador de canciones</h1>

      <AddSongApp addSong={addSong} />
      <TableSongApp
        songs={songs}
        deleteSong={deleteSong}
        updateSong={updateSong}
      />
    </>
  );
};
export default AdminScreen;
