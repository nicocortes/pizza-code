import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { postUsuario } from "../helpers/usuario";
import Swal from "sweetalert2";
import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_kne83he";
const TEMPLATE_ID = "template_54xj0tj";
const USER_ID = "user_Rt2AHG2InO0xxM5VaSVeY";

const RegisterForm = () => {
	const [formValue, setFormValue] = useState({
		nombre: "",
		domicilio: "",
		email: "",
		password: "",
	});

	const [response, setResponse] = useState({});
	const history = useHistory();

	useEffect(() => {
		if (response.ok) {
			Swal.fire(response.msg || " Usted se registro exitosamente");

			setTimeout(() => {
				history.push("/");
			}, 1000);
		}
	}, [response, history]);

	const handleChange = ({ target }) => {
		setFormValue({
			...formValue,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { nombre, email, password } = formValue;

		const expCharactersLength = /^[0-9a-zA-Z.,:;-_()]{6,16}$/;

		if (!expCharactersLength.test(password)) {
			Swal.fire({
				icon: "error",
				text: "Debe ingresar minimo 6 y maximo 16 caracteres!",
			});
			return;
		}

		if (nombre && email && password) {
			const templateParams = {
				from_name: "Pizza Code",
				to_name: nombre,
				message: "Bienvenido, se realizó con éxito tu registración.",
				to: email,
			};

			emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

			const apiResponse = {
				ok: true,
				msg: "Registro exitoso.",
			};

			setResponse(apiResponse);
			postUsuario(formValue).then((response) => {
				setResponse(response);
				setFormValue({
					nombre: "",
					domicilio: "",
					email: "",
					password: "",
				});
			});
		}
	};

	return (
		<div className="container-fluid mt-5">
			<div className="row form">
				<div className="col col-md-4 offset-md-4">
					<div className="card card-register">
						<div className="card-body">
							<h3 className="card-title text-center">
								<i className="fa fa-user" aria-hidden="true"></i> Registrese
								aqui:
							</h3>
							<hr />
							<Form onSubmit={handleSubmit}>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Nombre y Apellido</Form.Label>
									<Form.Control
										type="nombre"
										placeholder="Ingrese nombre y apellido"
										name="nombre"
										value={formValue.nombre}
										onChange={handleChange}
										required
										maxLength={30}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicDomicilio">
									<Form.Label>Domicilio</Form.Label>
									<Form.Control
										type="domicilio"
										placeholder="Ingrese domicilio"
										name="domicilio"
										value={formValue.domicilio}
										onChange={handleChange}
										required
										maxLength={30}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Correo</Form.Label>
									<Form.Control
										type="email"
										placeholder="Ingrese su correo"
										name="email"
										value={formValue.email}
										onChange={handleChange}
										required
										maxLength={30}
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control
										type="password"
										placeholder="Ingrese su contraseña"
										name="password"
										value={formValue.password}
										onChange={handleChange}
										required
										minLength={8}
										maxLength={20}
									/>
								</Form.Group>
								<Button
									variant="primary"
									type="submit"
									className="btn btn-color w-100 "
								>
									Registrarse
								</Button>
								{response.ok === false && (
									<div className="alert alert-danger" mt-3 role="alert">
										{response.msg}
									</div>
								)}
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
