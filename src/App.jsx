import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AdminScreen from "./pages/AdminScreen";
import SongScreen from "./pages/SongScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/song/:id" element={<SongScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
