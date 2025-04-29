import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import SongScreen from "../pages/SongScreen";
import AboutScreen from "../pages/AboutScreen";
import Planes from "../pages/Planes";
import NotFound from "../pages/NotFound";
import AdminScreen from "../pages/AdminScreen";
import AdminRoute from "./AdminRoute";


const PrincipalRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomeScreen />} />
        <Route path="/song/:id" element={<SongScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={
                    <AdminRoute>
                      <AdminScreen />
                    </AdminRoute>
                  }/>
      </Routes>
    </>
  );
};

export default PrincipalRoutes;