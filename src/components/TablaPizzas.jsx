import React, { useState, useEffect } from "react";
import { getPizzas, deletePizza } from "../helpers/pizza";
import BtnPaginacion from "./BtnPaginacion";
import ModalPizzas from "./Modals/ModalPizzas";

const TablaPizza = () => {
  const [actualizar, setActualizar] = useState("");
  const [pizzas, setPizzas] = useState({
    datos: [],
    loading: true,
  });

  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(() => {
    getPizzas().then((respuesta) => {
      setPizzas({
        datos: respuesta.pizzas,
        loading: false,
      });
      setTotpag(respuesta.Total);
    });
  }, []);

  useEffect(() => {
    updateDatos(pagina);
  }, [pagina, show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateDatos = (pag) => {
    getPizzas(pag).then((respuesta) => {
      setPizzas({
        datos: respuesta.pizzas,
        loading: false,
      });
    });
  };

  //---------------------------
  const borrarProducto = (uid) => {
    let produc = pizzas.datos.find((pizza) => {
      return pizza._id === uid;
    });

    let validar = window.confirm(
      `Esta seguro que quiere inactivar el producto ${produc.nombre}?`
    );
    if (validar) {
      deletePizza(uid).then((respuesta) => {
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        updateDatos(pagina);
      });
    }
  };

  return (
    <>
      {pizzas.loading ? (
        <div className="alert alert-success text-center" role="alert">
          Cargando...
        </div>
      ) : (
        <div className="mb-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Disponible</th>
                <th scope="col">Precio</th>
                <th scope="col">Categoria</th>
                <th className="d-flex justify-content-end">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      setActualizar("");
                      handleShow();
                    }}
                  >
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {pizzas.datos.map((producto) => (
                <tr key={producto._id}>
                  <th scope="row">{producto.nombre}</th>
                  <td>
                    {producto.disponible ? "Disponible" : "No disponible"}
                  </td>
                  <td className="d-flex justify-content-center">
                    ${producto.precio}
                  </td>
                  <td>{producto.categoria}</td>
                  <td>
                    <button
                      className="btn btn-warning ms-2"
                      onClick={() => {
                        setActualizar(producto._id);
                        handleShow();
                      }}
                    >
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => borrarProducto(producto._id)}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <BtnPaginacion
              totPag={totPag}
              pagina={pagina}
              setPagina={setPagina}
            />
            <ModalPizzas
              show={show}
              handleClose={handleClose}
              actualizar={actualizar}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TablaPizza;
