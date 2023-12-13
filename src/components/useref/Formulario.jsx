import React, { useRef } from "react";
import "./formulario.css";

const Formulario = () => {
  const nombrevalue = useRef();
  const apellidovalue = useRef();
  const emailvalue = useRef();
  const micaja = useRef();

  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombrevalue.current.value);
    console.log(apellidovalue.current.value);
    console.log(emailvalue.current.value);

    //mi caja

    let { current: caja } = micaja;

    caja.classList.add("fondoverde");
    caja.innerHTML = "Formulario Enviado";
  };
  return (
    <div className="formulario">
      <h3>Formulario</h3>
      <div ref={micaja} className="micaja">
        <h4>Pruebas con UseRef</h4>
      </div>
      <form className="form_formulario" onSubmit={mostrar}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          ref={nombrevalue}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          ref={apellidovalue}
        />
        <input
          type="email"
          placeholder="Correo Electronico"
          name="email"
          ref={emailvalue}
        />
        <input type="submit" value="Enviar" />
      </form>
      <br />
      <p>
        se utilizo useRef para tomar cada input <br />
        se puso una referencia en la caja de prueba para cambiar sus elementos
      </p>
    </div>
  );
};

export default Formulario;
