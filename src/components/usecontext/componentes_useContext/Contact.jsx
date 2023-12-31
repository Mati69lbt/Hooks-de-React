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
      <pre className="json">{JSON.stringify(datoDesdeElContexto.usuario)}</pre>
      <p></p>
    </div>
  );
};

export default Contact;
