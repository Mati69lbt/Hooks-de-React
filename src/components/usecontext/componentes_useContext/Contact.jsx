import React, { useContext } from "react";
import { PruebaContext } from "../PruebaContext";

const Contact = () => {
  const datoDesdeElContexto = useContext(PruebaContext);
  return (
    <div>
      {" "}
      <h1>Usted esta en Contactos</h1>
      <p>Pagina de contacto</p>
      <p>{datoDesdeElContexto.mensaje}</p>
      <p>{JSON.stringify(datoDesdeElContexto.usuario)}</p>
      <p></p>
    </div>
  );
};

export default Contact;
