import React, { useEffect, useReducer, useRef, useState } from "react";
import JuegoReducer from "../Reducers/JuegoReducer";
import Explicaciones from "./Explicaciones";

const init = () => {
  return JSON.parse(localStorage.getItem("juegos")) || [];
};

const Misjuegos = () => {
  const [valorEdicion, setValorEdicion] = useState("");
  const [editando, setEditando] = useState(false);
  const [titulo, setTitulo] = useState("");

  const formRef = useRef(null);

  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    valorEdicion !== "" ? setEditando(true) : setEditando(false);
  }, [valorEdicion]);

  useEffect(() => {
    localStorage.setItem("juegos", JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let juego = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: "crear",
      payload: juego,
    };

    dispatch(accion);

    console.log(juegos);

    formRef.current.reset();
    setTitulo("");
  };

  const eliminarJuego = (id) => {
    const accion = {
      type: "eliminar",
      payload: id,
    };
    dispatch(accion);
  };

  const editar = (id, nuevoTItulo) => {
    let juego = {
      id,
      titulo: nuevoTItulo,
    };

    const accion = {
      type: "editar",
      payload: juego,
    };
    dispatch(accion);
  };

  const modificarInputEdit = (e, id) => {
    e.preventDefault();
    setValorEdicion((prev) => ({ ...prev, [id]: e.target.value }));
  };

  const finalizarEdicion = (e, id) => {
    if (editando) {
      editar(id, valorEdicion[id]);
      setValorEdicion((prev) => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <div className="juegos">
      <h1>Estos son mis juegos</h1>
      <p>Numero de Juegos: {juegos.length}</p>
      <ul className="listado">
        {juegos?.map((juego) => {
          return (
            <li key={juego.id}>
              <div className="filas">
                <p>Titulo: {juego.titulo}</p>
                <button
                  onClick={() => {
                    eliminarJuego(juego.id);
                  }}
                >
                  X
                </button>

                <input
                  type="text"
                  value={valorEdicion[juego.id] || ""}
                  onChange={(e) => modificarInputEdit(e, juego.id)}
                  placeholder="editar"
                  className="editar"
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      finalizarEdicion(e, juego.id);
                    }
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <h3>Agregar Juegos</h3>

      <form
        ref={formRef}
        action=""
        className="formulario_reducers"
        onSubmit={conseguirDatosForm}
      >
        <div className="input-wrapper">
          <input type="text" name="titulo" placeholder="Titulo" />
        </div>

        <textarea
          type="text"
          name="descripcion"
          id="descripcion"
          placeholder="Descripcion"
          cols="5"
          rows="5"
        />

        <input type="submit" value="guardar" className="btn" />
      </form>
      <Explicaciones />
    </div>
  );
};

export default Misjuegos;
