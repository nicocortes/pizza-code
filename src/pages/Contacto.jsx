import React, { useState } from "react";
import { postConsulta } from "../helpers/contacto";

const Contacto = () => {
	const [formValue, setFormValue] = useState({
		nombre: "",
		email: "",
		telefono: "",
		asunto: "",
		mensaje: "",
	});

	const handleChange = ({ target }) => {
		if (target) {
			setFormValue({
				...formValue,
				[target.name]: target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postConsulta(formValue).then((respuesta) => {
			if (respuesta.errors) {
				return window.alert(respuesta.errors[0].msg);
			}
			if (respuesta.msg) {
				window.alert(respuesta.msg);
			}

			setFormValue({
				nombre: "",
				email: "",
				telefono: "",
				asunto: "",
				mensaje: "",
			});
		});
	};

	return (
		<div>
			<div className="container mt-5 text-white">
				<div className="col text-dark">
					<h3>Cuéntanos, ¿qué necesitas?</h3>
					<hr />
					<form onSubmit={handleSubmit}>
						<div className="row">
							<div className="form-group col-md-6">
								<label>
									Nombre: <span className="text-danger">*</span>
								</label>
								<input
									type="text"
									name="nombre"
									className="form-control"
									id="contact-nombre"
									required
									value={formValue.nombre}
									onChange={handleChange}
									maxLength={30}
								/>
							</div>
							<div className="form-group col-md-6">
								<label className="text-nowrap">
									Teléfono:{" "}
									<small className="fst-italic">(0381-154456699)</small>
								</label>
								<input
									type="tel"
									name="telefono"
									className="form-control"
									id="contact-telefono"
									pattern="[0-9]{4}-[0-9]{9}"
									value={formValue.telefono}
									onChange={handleChange}
									maxLength={30}
								/>
							</div>
						</div>
						<div className="row">
							<div className="form-group col-md-6">
								<label>
									E-mail: <span className="text-danger">*</span>
								</label>
								<input
									type="email"
									name="email"
									className="form-control"
									id="contact-email"
									required
									value={formValue.email}
									onChange={handleChange}
									maxLength={30}
								/>
							</div>
							<div className="form-group col-md-6">
								<label>Asunto:</label>
								<input
									type="text"
									name="asunto"
									className="form-control"
									id="contact-asunto"
									value={formValue.asunto}
									onChange={handleChange}
									maxLength={30}
								/>
							</div>
						</div>
						<div className="form-group">
							<label>
								Mensaje: <span className="text-danger">*</span>
							</label>
							<textarea
								name="mensaje"
								className="form-control"
								id="contact-mensaje"
								rows="3"
								placeholder="¿No encuentras tu pizza preferida? Cuéntanos..."
								required
								value={formValue.mensaje}
								onChange={handleChange}
								maxLength={300}
							></textarea>
						</div>
						<div>
							<button className="btn btn-color w-100 mt-2">Enviar</button>
							<small className="text-muted fst-italic">
								(*) Campos obligatorios
							</small>
						</div>
					</form>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
};

export default Contacto;
