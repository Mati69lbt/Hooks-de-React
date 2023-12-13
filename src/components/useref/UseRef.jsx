import React from "react";
import Formulario from "./Formulario";
import Example from "./Example";

const UseRef = () => {
  return (
    <div className="useRef">
      <div className="titulo_useref">
        <h1>UseRef</h1>
        <p>
          Es como una "etiqueta" que puedes adjuntar a un elemento o valor
          dentro de un componente funcional. <br />
          Esta "etiqueta" te permite acceder y modificar ese elemento o valor
          sin causar que el componente se vuelva a renderizar.
          <br /> Es especialmente útil para mantener referencias a elementos del
          DOM o para almacenar valores que no deben desencadenar una
          actualización de la interfaz de usuario cuando cambian.
          <br /> En resumen, useRef es una forma de mantener un vínculo mutable
          a cosas en tu componente funcional sin forzar renders innecesarios.
        </p>
      </div>
      <Formulario />
      <br />
      <Example />
    </div>
  );
};

export default UseRef;
