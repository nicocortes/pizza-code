import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAuth } from "../helpers/autentication";
import { useEffect } from "react";

const Login = () => {
	const isMounted = useRef(true);

	const history = useHistory();

	const [formValue, setFormValue] = useState({
		email: "",
		password: "",
	});
	const [btnDisable, setBtnDisable] = useState(false);

	const [login, setLogin] = useState({});

	useEffect(() => {
		if (login.token) {
			localStorage.setItem("auth", JSON.stringify(login));
			setTimeout(() => {
				history.push("/");
				window.location.reload();
			}, 1000);
		}
	}, [login, history]);

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	const handleChange = ({ target }) => {
		setFormValue({
			...formValue,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = formValue;

		if (email && password) {
			setBtnDisable(true);
			if (isMounted.current) {
				postAuth(formValue).then((respuesta) => {
					setLogin(respuesta);

					setBtnDisable(false);

					setFormValue({
						email: "",
						password: "",
					});
				});
			}
		}
	};

	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<div className="col col-md-4 offset-md-4">
					<div className="card card-login">
						<div className="card-body">
							<h3 className="card-title text-center">
								<i className="" aria-hidden="true"></i>PizzaCode
							</h3>
							<hr />
							<form onSubmit={handleSubmit}>
								<div className="form-group mb-2">
									<strong>Correo</strong>
									<input
										type="email"
										className="form-control"
										name="email"
										value={formValue.email}
										onChange={handleChange}
										maxLength={50}
										required
									/>
								</div>
								<div className="form-group mb-3">
									<strong>Contrase??a</strong>
									<input
										type="password"
										className="form-control"
										name="password"
										value={formValue.password}
										onChange={handleChange}
										maxLength={20}
										minLength={8}
										required
									/>
								</div>
								<div className="nav-item">
									<Link className="nav-link link-success ps-0" to="*">
										??Olvidaste tu contrase??a?
									</Link>
									<Link className="nav-link link-success ps-0" to="/register">
										??Todavia no te has registrado?
									</Link>
								</div>
								<br />
								<div className="d-grid gap-1">
									<button className="btn btn-success" disabled={btnDisable}>
										<i className="fa fa-sign-in" aria-hidden="true"></i>
										Ingresar
									</button>
								</div>

								{login.ok === false && (
									<div className="alert alert-danger mt-3" role="alert">
										{login.msg}
									</div>
								)}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
