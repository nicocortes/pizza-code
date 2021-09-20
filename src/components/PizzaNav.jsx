import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useContext } from "react";
import CartContext from "./CartContext";
import logo from "../assets/logo1.png";

const PizzaNav = () => {
	const { carrito } = useContext(CartContext);
	const history = useHistory();
	const [usuario, setUsuario] = useState(null);

	useEffect(() => {
		const datos = JSON.parse(localStorage.getItem("auth")) || {};
		setUsuario(datos.usuario);
	}, []);

	const handleClick = () => {
		if (usuario) {
			history.push("/micuenta");
		} else {
			history.push("/login");
		}
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark ">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="logo" className="logo" />
						PizzaCode
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/"
									activeStyle={{
										fontWeight: "bold",
									}}
								>
									Inicio
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/shop"
									activeStyle={{
										fontWeight: "bold",
									}}
								>
									Pizzas
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/contacto"
									activeStyle={{
										fontWeight: "bold",
									}}
								>
									Contacto
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									exact
									to="/nuestrahistoria"
									activeStyle={{
										fontWeight: "bold",
									}}
								>
									Nuestra Historia
								</NavLink>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item me-2 ">
								<button className="btn btn-color-user" onClick={handleClick}>
									<i className="fa fa-user text-white">
										<span>
											{" "}
											<b>{usuario?.nombre}</b>{" "}
										</span>
									</i>
								</button>
							</li>
							<li className="nav-item ">
								<Link to="/carrito">
									<button className="btn btn-color ">
										<i className="fa fa-shopping-cart  me-2"></i>
										{carrito?.total !== 0 && (
											<b>
												<span>
													{carrito.total} <span> | </span>
													<span>$</span>
													{carrito.costo}
												</span>
											</b>
										)}
									</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default PizzaNav;
