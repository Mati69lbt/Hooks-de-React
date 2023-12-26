import React, { useId } from "react";
import "./useid.css";

const UseId = () => {
  const id = useId();
  const segundo_id = useId();

  return (
    <div className="useID">
      <h1>useId</h1>
      <input type="text" id={id} name="nombre" placeholder="Nombre" />
      <p>
        Nos sirve para crear un identidicado unico tanto para el cliente como
        para el servidor
      </p>
      <p>Nos facilita crear tantos ide como querramos</p>
      <pre>const id = useId()</pre>
      <pre>
        {`<input type="text" id={id} name="nombre" placeholder="nombre" />`}
      </pre>
    </div>
  );
};

export default UseId;
