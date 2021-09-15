import { findIndex } from "lodash";
import React, { useState } from "react";
import { Link, useHistory } from "react-router";
import { postPedido } from "../helpers/pedido";

const Carrito = ({ carrito }) => {
	const history = useHistory();

	const [listrender, setListRender] = useState(false);
	const borrarProducto = (pizza) => {
		let validar = window.confirm(
			`Seguro que quiere eliminar del carrito la pizza ${pizza.sabor}?`
		);
		if (validar) {
			carrito.pizzas.splice(findIndex(pizza._id), 1);
			localStorage.setItem("cart", JSON.stringify(carrito));
			setListRender(!listrender);
		}
	};

	const crearPedido = () => {
		if (JSON.parse(localStorage.getItem("auth"))) {
			postPedido().then((respuesta) => {
				if (respuesta.errors) {
					return window.alert(respuesta.errors[0].msg);
				}
				if (respuesta.msg) {
					window.alert(respuesta.msg);
				}
			});
		} else {
			setTimeout(() => {
				history.push("/login");
			}, 1000);
		}
	};
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="card mt-5">
							<table className="table">
								<thead>
									<tr className="text-center">
										<th scope="col">Sabor</th>
										<th scope="col">Precio</th>
										<th scope="col">Cantidad</th>
										<th scope="col"></th>
									</tr>
								</thead>
								<tbody className="text-center">
									{carrito.pizzas.map((pizza) => (
										<tr key={pizza._id + 1}>
											<th scope="row">{pizza.sabor}</th>
											<td>${pizza.precio}</td>
											<td>{pizza.cantidad}</td>
											<td>
												<button
													className="btn btn-danger ms-2"
													onClick={() => borrarProducto(pizza)}
												>
													<i className="fa fa-trash-o" aria-hidden="true"></i>
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className="row text-center">
								<div className="col-12 col-md-6">
									{" "}
									<h2>Total: ${carrito.costo}</h2>
								</div>
								<div className="col-12 col-md-6 mb-3">
									{" "}
									<button className="btn btn-color" onClick={crearPedido}>
										<h5 className="text-white">Realizar Pedido</h5>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carrito;
