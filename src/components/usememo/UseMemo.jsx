import React from "react";
import Gestion from "./Gestion";
import "./usememo.css";
import Tarea from "./Tarea";

const UseMemo = () => {
  return (
    <div className="usememo">
      <h1>UseMemo</h1>
      <div className="componentes_usememo">
        <Gestion />
        <Tarea />
      </div>
    </div>
  );
};

export default UseMemo;
