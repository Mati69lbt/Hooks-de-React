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
    <div>
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
    </div>
  );
};

export default MiUsuario;
