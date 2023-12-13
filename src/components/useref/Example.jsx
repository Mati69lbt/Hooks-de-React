import React, { useEffect, useRef, useState } from "react";

const Example = () => {
  const [numeroSaludo, setNumeroSaludo] = useState(0);
  const SaludosEnCola = useRef(numeroSaludo);

  useEffect(() => {
    SaludosEnCola.current = numeroSaludo;
    setTimeout(() => {
      console.log("Mensajes en cola:" + SaludosEnCola.current);
    }, 2000);
  }, [numeroSaludo]);

  const enviarSaludo = (e) => {
    setNumeroSaludo(numeroSaludo + 1);
  };
  return (
    <div className="example">
      <hr />
      <h2>Otro ejemplo</h2>
      <h3>Saludos Enviados: {numeroSaludo}</h3>
      <button onClick={enviarSaludo}>Enviar Saludo!!!</button>
      <br />
      <p>
        aca utilizamos useref para guardar el numero de veces que hicimos click
        en el botton, hay un console.log adentro de un setTimeout que cuando
        finaliza, nos termina dando el numero final de las veces clicleadas, si
        no estaria esa referencia, se va renderizando constantemente hasta que
        nos da el numero final
      </p>
    </div>
  );
};

export default Example;
