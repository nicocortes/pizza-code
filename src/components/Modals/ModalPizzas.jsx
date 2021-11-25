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
		img: "",
		publicado: true,
	});

	useEffect(() => {
		setFormValue({
			nombre: "",
			precio: "",
			detalle: "",
			categoria: "",
			img: "",
			publicado: true,
		});
		if (actualizar) {
			getPizza(actualizar).then((respuesta) => {
				setFormValue({
					nombre: respuesta.pizza.nombre,
					precio: respuesta.pizza.precio,
					detalle: respuesta.pizza.detalle,
					categoria: respuesta.pizza.categoria,
					img: respuesta.pizza.img,
					publicado: respuesta.pizza.publicado,
				});
			});
		}
	}, [actualizar]);

	const handleChange = ({ target }) => {
		if (target.name === "publicado") {
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
					img: "",
					publicado: true,
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
					img: "",
					publicado: true,
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
						<div className="form-group mt-1">
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
						<div className="form-group mt-1">
							<label>Precio</label>
							<input
								type="number"
								name="precio"
								className="form-control"
								value={formValue.precio}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="form-group mt-1">
							<label>Detalle</label>
							<textarea
								type="text"
								name="detalle"
								className="form-control"
								value={formValue.detalle}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="form-group mt-1">
							<label>Categoria</label>
							<select
								className="form-select"
								name="categoria"
								aria-label="Default select example"
								value={formValue.categoria}
								onChange={handleChange}
								required
							>
								<option value="" disabled hidden>
									Elige una categoría
								</option>
								<option value="CLASICA">CLASICAS</option>
								<option value="SIN TAC">SIN TAC</option>
								<option value="ESPECIALIDAD DE LA CASA">
									ESPECIALIDAD DE LA CASA
								</option>
								<option value="A LA PIEDRA">A LA PIEDRA</option>
							</select>
						</div>
						<div className="form-group mt-1">
							<label>
								Imagen
								<span className="small"> (URL - Recomendado 500 x 500px)</span>
							</label>
							<input
								type="text"
								name="img"
								className="form-control"
								value={formValue.img}
								onChange={handleChange}
								required
							/>
							<small>
								<ul>
									<li>
										Por defecto colocar:{" "}
										<em>https://i.imgur.com/dAe6kfs.png</em>
									</li>
								</ul>
							</small>
						</div>
						<div className="form-check mt-3">
							<label>Publicada</label>
							<input
								className="form-check-input"
								type="checkbox"
								checked={formValue.publicado}
								value={formValue.publicado}
								onChange={handleChange}
								name="publicado"
							/>
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
