import React, { useContext, useRef } from "react";
import { PruebaContext } from "../PruebaContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  const reiniciar = useRef();

  const navigate = useNavigate();

  const guardarDatos = (e) => {
    e.preventDefault();
    let usuario_identificado = {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };

    setUsuario(usuario_identificado);

    reiniciar.current.reset();

    navigate("/useContext/inicio");
  };
  return (
    <div>
      {" "}
      <h1>Usted esta en Login</h1>
      <form className="login" onSubmit={guardarDatos} ref={reiniciar}>
        <input type="text" name="nick" placeholder="Nickname" />
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="web" placeholder="web" />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Login;
