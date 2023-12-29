import React, { useState } from "react";
import useMayus from "./hooks/useMayus";
import "./personalizados.css";
import MiFormulario from "./MiFormulario";
import MiUsuario from "./MiUsuario";

const Personalizados = () => {
  const [texto, setTexto] = useState("");
  const { mayusculas, minusculas, concatenar, miTexto, camello } =
    useMayus(texto);

  return (
    <div className="personalizados">
      <h1>Componentes Personalizados</h1>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      {miTexto ? <p>{miTexto}</p> : <p>Introduzca un texto en el input</p>}
      <button onClick={mayusculas}>Poner en Mayuscula</button>
      <button onClick={minusculas}>Poner en Minuscula</button>
      <button onClick={camello}>Poner en Camello</button>
      <button onClick={(e) => concatenar(", 25 años")}>Concatenar</button>
      <ul>
        <li>
          Lo que se hizo aqui fue hacer una funcion por fuera, useMayus, que nos
          devuelve la Funcion que cumple cada boton
        </li>
      </ul>
      <hr />
      <MiFormulario />
      <MiUsuario />
    </div>
  );
};

export default Personalizados;
