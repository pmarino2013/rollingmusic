import React from "react";
import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import "../css/LoginStyle.css";
import {datosUsuarios} from "../data/datosUsuarios.js";
import { useNavigate } from "react-router-dom";

const LoginApp = () => {
    // const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        formState: { errors },
    } = useForm()

    const login = (datos) => {
      localStorage.setItem("user", JSON.stringify(datos));
      reset();
      setFocus("email");
    }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-container p-5">
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3">¡Bienvenido!</h2>
              <p className="text-muted">Iniciá sesión para continuar</p>
            </div>

            <form onSubmit={handleSubmit(login)}>
              <div className="mb-4 position-relative">
                <label for="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg ps-4"
                  {...register("email", {required: true})}
                  placeholder="nombre@ejemplo.com"
                />
                {
                  errors.email && (
                    <span role="alert" className="text-danger">El campo no debe estar vacío</span>
                  )
                }
                <i className="bi bi-envelope-fill input-icon"></i>
              </div>

              <div className="mb-4 position-relative">
                <label for="password" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg ps-4"
                  {...register("password", {required: true})}
                  placeholder="••••••••"
                />
                {
                  errors.password && (
                    <span role="alert" className="text-danger">El campo no debe estar vacío</span>
                  )
                }
                <i className="bi bi-lock-fill input-icon"></i>
              </div>

              <button type="submit" className="btn btn-lg w-100 my-3 text-white" id="boton-login">
                Iniciar sesión
              </button>

              <div className="text-center mt-4">
                <span className="text-muted">¿No tenés cuenta? </span>
                <a
                  href="#"
                  className="text-decoration-none fw-bold acustom"
                >
                  Registrate
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginApp;