import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SongScreen from "./pages/SongScreen";
import AdminScreen from "./pages/AdminScreen";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import AboutScreen from "./pages/AboutScreen";
import Planes from "./pages/Planes";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/song/:id" element={<SongScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>
      <FooterApp />
    </BrowserRouter>
  );
};

export default App;
