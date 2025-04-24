import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Rolling Music</h1>
      <Link to="/planes" className="btn btn-primary mt-3">
        Suscribete
      </Link>
    </>
  );
};

export default Home;