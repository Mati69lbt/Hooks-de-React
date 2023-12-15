import React, { useEffect, useState } from "react";

const Empleados = React.memo(({ pagina, mensaje }) => {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    conseguir_Empleados(pagina);
  }, [pagina]);

  const conseguir_Empleados = async (pagina) => {
    const url = "https://reqres.in/api/users?page=" + pagina;
    const peticion = await fetch(url);
    const { data: empleados } = await peticion.json();
    setEmpleados(empleados);
    console.log("se ejecuto la peticion ajax");
  };

  console.log("Se ha vuelto a renderizar Empelados!!");

  mensaje();
  return (
    <div>
      <p>Mostrando la Página: {pagina}</p>
      <ol>
        {empleados.length >= 1 &&
          empleados.map((trabajador) => {
            return (
              <li key={trabajador.id}>
                {trabajador.first_name} {trabajador.last_name}
              </li>
            );
          })}
      </ol>
    </div>
  );
});

export default Empleados;
