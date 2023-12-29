import { useState } from "react";

const useMayus = (texto) => {
  const [miTexto, setMiTexto] = useState(texto);

  const mayusculas = () => {
    setMiTexto(texto.toUpperCase());
  };
  const minusculas = () => {
    setMiTexto(texto.toLowerCase());
  };
  const concatenar = (texto_añadido) => {
    setMiTexto(texto + texto_añadido);
  };
  const camello = () => {
    var palabras = texto.split(" ");

    // Iterar sobre cada palabra y capitalizar la primera letra
    for (var i = 0; i < palabras.length; i++) {
      palabras[i] =
        palabras[i].charAt(0).toLocaleUpperCase() + palabras[i].slice(1);
    }

    // Unir las palabras de nuevo en una oración
    var oracionCapitalizada = palabras.join(" ");

    setMiTexto(oracionCapitalizada);
  };

  return {
    miTexto,
    mayusculas,
    minusculas,
    concatenar,
    camello,
  };
};

export default useMayus;
