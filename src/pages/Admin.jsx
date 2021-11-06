import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TablaPizzas from "../components/TablaPizzas";
import TablaUsuarios from "../components/TablaUsuarios";
import TablePedidos from "../components/TablePedidos";

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
				<div className="col-12 col-md-6 ">
					<h3>Usuarios</h3>
					<TablaUsuarios />
				</div>
				<div className="col-12 col-md-6 mt-5 mt-md-0">
					<h3 className="mb-0">Pizzas</h3>
					<TablaPizzas />
				</div>
			</div>

			<div className="row mt-5">
				<div className="col">
					<h3>Pedidos</h3>
					<TablePedidos />
				</div>
			</div>
		</div>
	);
};

export default Admin;
