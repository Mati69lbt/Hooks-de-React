import React, { useContext } from "react";
import { PruebaContext } from "../PruebaContext";

const Inicio = () => {
  const { mensaje, curso, usuario, setUsuario } = useContext(PruebaContext);

  return (
    <div className="inicio_useContext">
      <h1>Usted esta en Inicio</h1>
      <p>
        Valor compartido:
        <strong> {mensaje}</strong>
      </p>
      <p>{curso.contenidos}</p>
      <p> Nombre: {usuario.nombre}</p>
      <br />
      <h2>Explicaciones:</h2>
      <ul>
        <li>
          Crear en una hoja aparte el useContext:{" "}
          {"export const PruebaContext = createContext(null)"}
        </li>
        <li>
          Envolver el componente con el useContext creado y un Provider: <br />
          <pre>
            {` <PruebaContext.Provider
          value={{
            mensaje: "Matias Daniel Delgado, Marcos Juarez, CBA.",
            curso,
            usuario,
            setUsuario,
          }}
        >
          <Outlet />
        </PruebaContext.Provider>`}
          </pre>
        </li>
        <li>
          Entonces ahora podemos usar toda la informacion desde cualquier
          componente importando el useContext que habiamos creado:
          <pre> const datoDesdeElContexto = useContext(PruebaContext)</pre>
        </li>
      </ul>
    </div>
  );
};

export default Inicio;
