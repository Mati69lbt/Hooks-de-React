import { useEffect, useState } from "react";

const useAjax = (url) => {
  const [usuario, setUsuario] = useState({
    datos: null,
  });

  const getUsuario = async () => {
    const peticion = await fetch(url);
    const { data } = await peticion.json();

    setUsuario({
      datos: data,
    });
  };
  useEffect(() => {
    getUsuario();
  }, [url]);
  return {
    usuario,
  };
};

export default useAjax;
