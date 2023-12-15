import React, { useCallback, useRef, useState } from "react";
import Empleados from "./Empleados";

const Gestion = () => {
  const [nombre, setNombre] = useState("");
  const [pagina, setPagina] = useState(1);
  const gestorInput = useRef();

  const asignarGestor = (e) => {
    setNombre(gestorInput.current.value);
  };

  const mostrarMensaje = useCallback(() => {
    console.log("mensaje de Gestios con Callback");
  }, [pagina]);

  return (
    <div className="gestion">
      <h2>Nombre del Gestor: {nombre}</h2>
      <input
        type="text"
        ref={gestorInput}
        onChange={asignarGestor}
        placeholder="Introduce tu nombre de Gestor"
      />
      <h3>Listado de Empleados:</h3>
      <p>
        Los usuarios son gestionados por {nombre} y vienen de jsonplaceholder...
      </p>
      <button
        className="boton_verde"
        onClick={() => {
          setPagina(1);
        }}
      >
        Pág 1
      </button>
      <button
        className="boton_verde"
        onClick={() => {
          setPagina(2);
        }}
      >
        Pág 2
      </button>
      <Empleados pagina={pagina} mensaje={mostrarMensaje} />
      <br />
      <ul>
        <li>
          Se trabajo con UseMemo para que solo se renderice los empleados cuando
          se cambiaba de pagina, que si solo se tocaba el input, no haga un
          re-renderiado
        </li>
        <li>
          Ademas se probo un <strong>useCallback</strong> para que solo se
          muestre un console.log cuando se cambie de pagina
        </li>
      </ul>
    </div>
  );
};

export default Gestion;
