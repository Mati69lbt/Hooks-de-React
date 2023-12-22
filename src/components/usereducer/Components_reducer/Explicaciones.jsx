import React from "react";

const Explicaciones = () => {
  return (
    <div className="explicaciones">
      <h1>Explicaciones</h1>
      <br />
      <h2 style={{ textDecoration: "underline" }}>
        Como Formatear un Formulario con UseRef:
      </h2>
      <ul className="ul_explicaciones">
        <li>Importar el useRef</li>
        <li>Crear una constante para utilizar en useRef con el valor null</li>
        <li>Llamar esa constante con la etiqueta ref en la etiqueta form</li>
        <li>
          Volver a llama a esa constante en la funcion "onSubmit" del
          formulario, esta vez como : "nombreDeLaConstante.current.reset()"
        </li>
      </ul>
      <br />
      <h2 style={{ textDecoration: "underline" }}>
        Como Formatear un input que no esta dentro de un Form:
      </h2>
      <ul className="ul_explicaciones">
        <li>
          Crear tres useState:
          <ul className="ul_sublista">
            <li>uno para valorEdicion, vacío, que puede contener un id</li>
            <li>un flag para saber si está editando, en false</li>
            <li>otro para título en vacío</li>
          </ul>
        </li>
        <li>
          Crear un useEffect, que va a estar observando a valorEdicion, para
          poner el flag(editando) en true o false
        </li>
        <li>
          SetTitulo, va vacio "" al ultimo de la funcion de conseguir los datos
          del form
        </li>
        <li>
          El input va a tener un onchange para cuando se modifique, esa funcion
          va a setear el valor de edicion con el estado previo, ej:
          <br />
          {"{setValorEdicion((prev) => ({ ...prev, [id]: e.target.value }));}"}
        </li>
        <li>
          El input puede tener dos funciones interesantes, onBlur y onKeyUp, el
          1ro es ejecutar el input cuando clickleamos fuera del input, el
          segundo es cuando apretamos enter
        </li>
        <li>
          Esas funciones ejecutan otra que en este caso se llama
          finalizarEdicion, esta se lelva el evento y el id, que 1ro ven como
          eta el flag editando, si esta activo, ejecutan la funcion editar, para
          hacer la edicion y setean de nuevo el valor de edicion
        </li>
      </ul>
      <h1 style={{ textDecoration: "underline" }}>useReducer</h1>
      <ul className="ul_explicaciones">
        <li>
          Importamos el hook:
          <br />
          <p>
            {" const [juegos, dispatch] = useReducer(JuegoReducer, [], init);"}
          </p>
          <ul className="ul_sublista">
            <li>Tiene un estado</li>
            <li>Tiene un disparador, para las acciones</li>
            <li>
              luego del hook tiene un componente que utiliza un switch para las
              acciones, este se compone de un estado y acciones, que estas
              ultimas se componen con su type
            </li>
            <li>
              Por ultimo tenemos o un array vacio o el init, si no hay nada en
              el init, toma el array vacio
            </li>
            <li>Fuera del Componente, le damos valor al init</li>
          </ul>
        </li>
        <li>Dentro de cada Funcion, utilizaremos el dispatch con la accion</li>
        <li>FIN</li>
      </ul>
    </div>
  );
};

export default Explicaciones;
