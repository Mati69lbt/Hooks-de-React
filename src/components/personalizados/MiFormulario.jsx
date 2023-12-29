import React, { useRef, useState } from "react";
import useForm from "./hooks/useForm";

const MiFormulario = () => {
  const { formulario, enviado, cambiado } = useForm({});

  const formu = useRef();

  const send_reset = (e) => {
    enviado(e);
    formu.current.reset();
  };

  return (
    <div>
      <h1>Formulario</h1>
      <p>Para guardar un Curso: {formulario.titulo}</p>
      <p className="codigo">{JSON.stringify(formulario)}</p>
      <form onSubmit={send_reset} className="miformulario" ref={formu}>
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          onChange={cambiado}
        />
        <input
          type="number"
          name="anio"
          placeholder="Año de Publicacion"
          onChange={cambiado}
        />
        <textarea
          name="descripcion"
          placeholder="descripcion"
          onChange={cambiado}
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          onChange={cambiado}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          onChange={cambiado}
        />
        <input type="submit" value="Enviar" />
      </form>
      <hr />
    </div>
  );
};

export default MiFormulario;
