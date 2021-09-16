import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TablaPizzas from "../components/TablaPizzas";
import TablaUsuarios from "../components/TablaUsuarios";

const Admin = () => {
  const [state, setState] = useState({ rol: "" });
  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
    setState(datos.usuario);
  }, [state.rol]);

  if (state.rol !== "ADMIN_ROLE") {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Usuario No Autorizado
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Administración</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 offset-md-2">
          <h3>Usuarios</h3>
          <TablaUsuarios />
        </div>
        <div className="col-12 col-md-4 offset-md-1">
          <h3>Categorias</h3>
          <TablaPizzas />
        </div>
      
      </div>
    </div>
  );
};

export default Admin;