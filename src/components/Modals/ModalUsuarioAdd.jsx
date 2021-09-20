import React, { useState } from "react";
import { postUsuario, putUsuario, getUsuarioId} from "../../helpers/usuario";
import { Modal, Button } from "react-bootstrap";

import { useEffect } from "react"; //agreagdo

const ModalUsuarioAdd = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "",
  });



  useEffect(() => {
    setFormValue({
      nombre: "",
      email: "",
      password: "",
      rol: "",
    });
    if (actualizar) {
      getUsuarioId(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.usuario.nombre,
          email: respuesta.usuario.email,
          password: respuesta.usuario.password,
          rol: respuesta.usuario.rol,
          
        });
      });
    }


  }, [actualizar]);

  // const handleChange = ({ target }) => {
  //   if (target.name === "disponible") {
  //     setFormValue({
  //       ...formValue,
  //       [target.name]: target.checked,
  //     });
  //   } else {
  //     setFormValue({
  //       ...formValue,
  //       [target.name]: target.value,
  //     });
  //   }
  // };



  // const handleChange = (e) => {
  //   setFormValue({
  //     ...formValue,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleChange = ({ target }) => {

  //     setFormValue({
  //       ...formValue,
  //       [target.name]: target.value,
  //     });
  //   };

  const handleChange = (e) => {
    console.log(e.target)
    setFormValue({
      ...formValue,
      [e.target.name]:e.target.value
      
    });
  };
 



  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    

    if (actualizar) {
      putUsuario(actualizar, formValue).then((respuesta) => {

        console.log("la respuesta es", respuesta)
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
          console.log(respuesta.msg)
        }
        setLoading(false);
        setFormValue({
          nombre: "",
          email: "",
          password: "",
          rol: "",
        });
        handleClose();
      });
    } else {

      console.log(actualizar)

    postUsuario(formValue).then((respuesta) => {
      //   console.log(respuesta);
      if (respuesta.errors) {
        setLoading(false);
        return window.alert(respuesta.errors[0].msg);
      }
      if (respuesta.msg) {
        window.alert(respuesta.msg);
      }
      setLoading(false);
      setFormValue({
        nombre: "",
        email: "",
        password: "",
        rol: "",
      });
      handleClose();
    });
  }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{actualizar ? "Modificar Usuario" : "Nuevo Usuario"}</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ej: Pedro Martinez"
                required
                value={formValue.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="pedromartinez@gmail.com"
                required
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                autoComplete="off"
                required
                value={formValue.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Rol</label>
              <select
                className="form-select"
                name="rol"
                aria-label="Default select example"
                value={formValue.rol}
                onChange={handleChange}
                required
              >
                <option defaultValue="">Elige un Rol</option>
                <option value="USER_ROLE">Usuario</option>
                <option value="ADMIN_ROLE">Administrador</option>
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalUsuarioAdd