import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSreen from "./pages/HomeSreen";
import AdminScreen from "./pages/AdminScreen";
import SongScreen from "./pages/SongScreen";

const App = () => {
  return (
    <>
      <h1>Navbar</h1>;
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSreen />} />
          <Route path="/song/:id" element={<SongScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
      {/* <HomeSreen /> */}
      {/* <AdminScreen /> */}
    </>
  );
};

export default App;
