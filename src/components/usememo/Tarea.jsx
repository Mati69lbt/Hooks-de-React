import React, { useMemo, useState } from "react";

const Tarea = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(80);

  const guardarTareas = (e) => {
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value];
    setTareas(tareas_actualizadas);
    console.log("Lista de tareas: ", tareas);
  };

  const borrarTarea = (id) => {
    let filtrado = tareas.filter((item, index) => index !== id);
    setTareas(filtrado);
  };

  const sumarAlContador = (e) => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulador) => {
    for (let index = 0; index < acumulador; index++) {
      console.log("Ejecutando acumulacion de contadores del pasado");
      console.log(`se le suma ${index} al contador en fecha`);
    }
    return `contador manual de tareas: ${acumulador}`;
  };

  const memoContadores = useMemo(() => contadoresPasados(contador), [contador]);

  return (
    <div className="tarea">
      <h2>Tareas</h2>
      <form onSubmit={guardarTareas}>
        <input
          type="text"
          name="descripcion"
          placeholder="describe la tarea"
          className="input_tarea"
        />
        <input type="submit" value="guardar" className="boton_verde" />
      </form>
      <br />
      <h3>{memoContadores}</h3>
      <button className="boton_verde" onClick={sumarAlContador}>
        Sumar
      </button>
      <h3>Lista de Tareas:</h3>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}&nbsp;
            <button className="boton_verde" onClick={() => borrarTarea(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <p>
        Se hizo una funcion compleja dentro de un UseMemo y solo se guarde el
        valor y no vuenva a ser calculado si no se desea utilizar, por ejemplo
        el boton sumar
      </p>
    </div>
  );
};

export default Tarea;
