import { useState } from "react";
import useAjax from "./hooks/useAjax";

const MiUsuario = () => {
  const [url, setUrl] = useState("https://reqres.in/api/users/1");
  const { usuario } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl(`https://reqres.in/api/users/${id}`);
  };

  return (
    <div className="miUsuario">
      <h1>Mi Usuario:</h1>
      <p>Datos del Usuario:</p>
      <p>
        <strong>
          {usuario?.datos?.first_name} {usuario?.datos?.last_name}
        </strong>
      </p>
      <div className="rango">
        <label htmlFor="id">Selecciona un ID: </label>
        <input
          type="range"
          min="1"
          max="12"
          onChange={getId}
          name="id"
          defaultValue="1"
        />
      </div>
      <p>ID Seleccionado: {usuario?.datos?.id}</p>
      <ul>
        <li>
          Aca el Hook se utilizo para traer informacion de una api externa:
        </li>
        <li>
          Componente:
          <br />
          {`
          const [url, setUrl] = useState("https://reqres.in/api/users/1");   `}
          <br />
          {`const { usuario } = useAjax(url)`}
          {`const getId = (e) => {let id = parseInt(e.target.value);`}
          <br />
          {`setUrl(https://reqres.in/api/users/id)`}
        </li>
        <li>
          Hook:
          <br />
          {`
              const [usuario, setUsuario] = useState({
    datos: null,
  });
   `}
          <br />
          {`
  const getUsuario = async () => {   `}
          <br />
          {`
    const peticion = await fetch(url);`}
          <br />
          {`
    const { data } = await peticion.json();`}
          <br />
          {`
    setUsuario({
      datos: data,
    });
  };
     `}{" "}
          <br />
          {`
  useEffect(() => {
    getUsuario();
  }, [url]);
     `}
          <br />
          {`
  return {
    usuario,
  };
            `}
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default MiUsuario;
