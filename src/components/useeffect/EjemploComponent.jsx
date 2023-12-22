import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const EjemploComponent = () => {
  const [mostrar, setMostrar] = useState(false);
  const caja = useRef();
  const boton = useRef();
  useLayoutEffect(() => {
    console.log("useLayoutEffect: Componente Cargando!!!");
  }, []);
  useEffect(() => {
    console.log("useEffect: Componente Cargando!!!");

    if (caja.current == null) return;
    const { bottom } = boton.current.getBoundingClientRect();
    caja.current.style.top = `${bottom + 150}px`;
    caja.current.style.left = `${bottom + 45}px`;
  }, [mostrar]);

  return (
    <div className="ejemplo">
      <h1>UseEffect y UseLayoutEffect</h1>
      <button
        ref={boton}
        onClick={() => {
          setMostrar((prev) => !prev);
        }}
      >
        Mostrar Mesaje
      </button>
      {mostrar && (
        <div id="caja" ref={caja}>
          Hola, Soy un mensaje
        </div>
      )}
      <ul>
        <strong>useEffect:</strong>
        es asincrónico y se ejecuta después del renderizado del componente y, a
        menudo, después de que la pantalla se ha actualizado. Esto es útil para
        operaciones que no necesitan bloquear el navegador o que no deben
        interferir con la actualización de la interfaz de usuario.
        <li>
          <strong>useLayoutEffect:</strong>
          es síncrono y se ejecuta antes de que el navegador tenga la
          oportunidad de pintar la pantalla. Esto lo hace útil para medidas o
          manipulaciones que deben realizarse antes de la actualización visual.
        </li>
        <li>
          Recuerda que en la mayoría de los casos, <strong>useEffect</strong>{" "}
          será suficiente y más eficiente. <strong>useLayoutEffect</strong> se
          utiliza en casos específicos donde la sincronización precisa es
          crucial, pero debes ser consciente de su impacto en el rendimiento.
        </li>
      </ul>
    </div>
  );
};

export default EjemploComponent;
