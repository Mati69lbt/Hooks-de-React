import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./usecontext.css";
import { PruebaContext } from "./PruebaContext";

const UseContext = () => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const cargar_usuarios = JSON.parse(
      localStorage.getItem("usuario", JSON.stringify(usuario))
    );
    setUsuario(cargar_usuarios);
  }, []);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  const curso = {
    id: 1,
    titulo: "Master en JavaScript",
    contenidos: "Herraminetas Escenciales",
  };
  return (
    <div className="body_usecontext">
      <h1>UseContext</h1>
      <header className="header_useContext">
        <nav>
          <div className="logo">
            <h2>Aprendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="inicio">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="acerca">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="contactos">Contactos</NavLink>
            </li>
            <li>
              {usuario && usuario.nick ? (
                <div className="login_nav">
                  <li>
                    <NavLink to="inicio">{usuario.nick}</NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setUsuario({});
                      }}
                    >
                      Salir
                    </a>
                  </li>
                </div>
              ) : (
                <NavLink to="login">Login</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <br />
      <hr style={{ border: "2px solid black" }} />
      <section className="content_useContext">
        <PruebaContext.Provider
          value={{
            mensaje: "Matias Daniel Delgado, Marcos Juarez, CBA.",
            curso,
            usuario,
            setUsuario,
          }}
        >
          <Outlet />
        </PruebaContext.Provider>
      </section>
    </div>
  );
};

export default UseContext;
