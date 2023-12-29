import React, { useRef, useState } from "react";
import useForm from "./hooks/useForm";

const MiFormulario = () => {
  const { formulario, enviado, cambiado } = useForm({});

  const formu = useRef();

  const send_reset = (e) => {
    enviado(e);
    formu.current.reset();
  };

  return (
    <div className="hojaDeFormulario">
      <h1>Formulario</h1>
      <p>Para guardar un Curso: {formulario.titulo}</p>
      <p className="codigo">{JSON.stringify(formulario)}</p>
      <form onSubmit={send_reset} className="miformulario" ref={formu}>
        <input
          type="text"
          name="titulo"
          placeholder="Titulo"
          onChange={cambiado}
        />
        <input
          type="number"
          name="anio"
          placeholder="Año de Publicacion"
          onChange={cambiado}
        />
        <textarea
          name="descripcion"
          placeholder="Descripcion"
          onChange={cambiado}
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          onChange={cambiado}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          onChange={cambiado}
        />
        <input type="submit" value="Enviar" />
      </form>
      <ul>
        <li>
          Se Creo un Hook Personalizado para que se adapte a cualquier
          formulario, ya sea chico o grande
        </li>
        <li>
          UseForm:
          <ul className="sublista">
            <li>
              <pre className="preuno">{`
              const [formulario, setFormulario] = useState(obejtoInicial = {});
              `}</pre>
              <pre>
                {`
    const `}
                <span style={{ color: "red", textDecoration: "underline" }}>
                  serializarFormulario
                </span>
                {` = (formulario) => {
      const formData = new FormData(formulario);
      const objetoCompleto = {};
      for (let [name, value] of formData) {
        objetoCompleto[name] = value;
      }
      return objetoCompleto;
    };
  `}
              </pre>
              <br />
              <pre>
                {`const `}
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  enviado
                </span>
                {`  = (e) => {
    e.preventDefault();
    ******* aca nos ahorramos todo lo maual *******
    // let curso = {
    //   titulo: e.target.titulo.value,
    //   anio: e.target.anio.value,
    //   descripcion: e.target.descripcion.value,
    //   autor: e.target.autor.value,
    //   email: e.target.email.value,
    // };
    ************************
    let curso =`}{" "}
                <span style={{ color: "red", textDecoration: "underline" }}>
                  serializarFormulario
                </span>
                {`(e.target);
    setFormulario(curso);
  };`}{" "}
              </pre>
              <br />
              <pre>
                {`const `}
                <span style={{ color: "green", textDecoration: "underline" }}>
                  cambiado
                </span>
                {`= ({ target }) => {
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };`}
              </pre>
              <br />
              <pre>
                {`return { formulario,`}{" "}
                <span style={{ color: "blue", textDecoration: "underline" }}>
                  enviado
                </span>{" "}
                ,{" "}
                <span style={{ color: "green", textDecoration: "underline" }}>
                  cambiado
                </span>
                {`};`}
              </pre>
            </li>
            <li>
              En el Compopnente:
              <pre className="preult">
                {`
                  const { formulario, enviado, cambiado } = useForm({});
`}
              </pre>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default MiFormulario;
