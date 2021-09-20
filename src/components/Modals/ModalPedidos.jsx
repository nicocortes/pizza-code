import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  getPedido,

} from "../../helpers/pedido";

// import { getCategorias } from "../../helpers/categorias";

const ModalPedidos = () => {
  const [loading, setLoading] = useState(false);

  const [pedidos, setPedidos] = useState({
    datos: [],
    loading: true,
  });

  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

//   const [show, setShow] = useState(false);

  useEffect(() => {
    getPedido(mostrar).then((respuesta) => {
      setPedidos({
        datos: respuesta.pedidos.items,
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
    getPedidos(pag).then((respuesta) => {
      setPedidos({
        datos: respuesta.pedidos,
        loading: false,
      });
    });
  };








  // const [categorias, setCategorias] = useState([]);
//   const [formValue, setFormValue] = useState({
//     nombre: "",
//     precio: "",
//     detalle: "",
//     categoria: "",
//     disponible: true,
//   });

  // useEffect(() => {
  //   getCategorias().then((respuesta) => {
  //     setCategorias(respuesta.categorias);
  //   });
  // }, []);

//   useEffect(() => {
//     setFormValue({
//       nombre: "",
//       precio: "",
//       detalle: "",
//       categoria: "",
//       disponible: true,
//     });
//     if (actualizar) {
//       getPizza(actualizar).then((respuesta) => {
//         setFormValue({
//           nombre: respuesta.pizza.nombre,
//           precio: respuesta.pizza.precio,
//           detalle: respuesta.pizza.detalle,
//           categoria: respuesta.pizza.categoria,
//           disponible: respuesta.pizza.disponible,
//         });
//       });
//     }
//   }, [actualizar]);

//   const handleChange = ({ target }) => {
//     if (target.name === "disponible") {
//       setFormValue({
//         ...formValue,
//         [target.name]: target.checked,
//       });
//     } else {
//       setFormValue({
//         ...formValue,
//         [target.name]: target.value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setLoading(true);

//     if (actualizar) {
//       putPizza(actualizar, formValue).then((respuesta) => {
//         if (respuesta.errors) {
//           setLoading(false);
//           return window.alert(respuesta.errors[0].msg);
//         }
//         if (respuesta.msg) {
//           window.alert(respuesta.msg);
//         }
//         setLoading(false);
//         setFormValue({
//           nombre: "",
//           precio: "",
//           detalle: "",
//           categoria: "",
//           disponible: true,
//         });
//         handleClose();
//       });
//     } else {
//       postPizza(formValue).then((respuesta) => {
//         if (respuesta.errors) {
//           setLoading(false);
//           return window.alert(respuesta.errors[0].msg);
//         }
//         if (respuesta.msg) {
//           window.alert(respuesta.msg);
//         }
//         setLoading(false);
//         setFormValue({
//           nombre: "",
//           precio: "",
//           detalle: "",
//           categoria: "",
//           disponible: true,
//         });
//         handleClose();
//       });
//     }
//   };

  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>
            Detalle
          </Modal.Title>
        </Modal.Header>

          <Modal.Body>

          {/* <table className="table">
            <thead>
              <tr>
                <th scope="col">nombre</th>
                <th scope="col">precio</th>
                

              </tr>
            </thead>
            <tbody>
              {pedidos.datos.map((items) => (
               
                <tr key={items._id}>
                  <th scope="row">{items.nombre}</th>

                    <td >
                      ${items.precio}
                    </td>
                    



                    
                </tr>
              ))}
            </tbody>
          </table> */}


          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Guardar
            </Button> */}
          </Modal.Footer>
  
      </Modal>
    </div>
  );
};

export default ModalPedidos;