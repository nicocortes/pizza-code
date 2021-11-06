import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import { getPizza, postPizza, putPizza } from "../../helpers/pizza";

const ModalPizzas = ({ show, handleClose, actualizar }) => {
	const [loading, setLoading] = useState(false);

	const [formValue, setFormValue] = useState({
		nombre: "",
		precio: "",
		detalle: "",
		categoria: "",
		disponible: true,
	});

	useEffect(() => {
		setFormValue({
			nombre: "",
			precio: "",
			detalle: "",
			categoria: "",
			disponible: true,
		});
		if (actualizar) {
			getPizza(actualizar).then((respuesta) => {
				setFormValue({
					nombre: respuesta.pizza.nombre,
					precio: respuesta.pizza.precio,
					detalle: respuesta.pizza.detalle,
					categoria: respuesta.pizza.categoria,
					disponible: respuesta.pizza.disponible,
				});
			});
		}
	}, [actualizar]);

	const handleChange = ({ target }) => {
		if (target.name === "disponible") {
			setFormValue({
				...formValue,
				[target.name]: target.checked,
			});
		} else {
			setFormValue({
				...formValue,
				[target.name]: target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		if (actualizar) {
			putPizza(actualizar, formValue).then((respuesta) => {
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
					precio: "",
					detalle: "",
					categoria: "",
					disponible: true,
				});
				handleClose();
			});
		} else {
			postPizza(formValue).then((respuesta) => {
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
					precio: "",
					detalle: "",
					categoria: "",
					disponible: true,
				});
				handleClose();
			});
		}
	};

	return (
		<div>
			<Modal show={show} onHide={handleClose} centered>
				<Modal.Header closeButton>
					<Modal.Title>
						{actualizar ? "Modificar producto" : "Nuevo producto"}
					</Modal.Title>
				</Modal.Header>
				<form onSubmit={handleSubmit}>
					<Modal.Body>
						<div className="form-group">
							<label>Nombre</label>
							<input
								type="text"
								name="nombre"
								className="form-control"
								placeholder="Ej: Calabresa"
								required
								value={formValue.nombre}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Precio</label>
							<input
								type="number"
								name="precio"
								className="form-control"
								value={formValue.precio}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Detalle</label>
							<textarea
								type="text"
								name="detalle"
								className="form-control"
								value={formValue.detalle}
								onChange={handleChange}
							/>
						</div>

						<div className="form-group">
							<label>Categoria</label>
							<select
								className="form-select"
								name="categoria"
								aria-label="Default select example"
								value={formValue.categoria}
								onChange={handleChange}
								required
							>
								<option defaultValue="">Elige una Categoria</option>
								<option value="CLASICA">CLASICAS</option>
								<option value="SIN TAC">SIN TAC</option>
								<option value="ESPECIALIDAD DE LA CASA">
									ESPECIALIDAD DE LA CASA
								</option>
								<option value="A LA PIEDRA">A LA PIEDRA</option>
							</select>
						</div>

						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								checked={formValue.disponible}
								value={formValue.disponible}
								onChange={handleChange}
								name="disponible"
							/>
							<label>Disponible</label>
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

export default ModalPizzas;
