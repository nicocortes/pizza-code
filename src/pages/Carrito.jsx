import React from "react";
import { Link, useHistory } from "react-router-dom";
import { postPedido } from "../helpers/pedido";
import cartEmpty from "../assets/cart-empty.png";
import CartContext from "../components/CartContext";
import { useContext } from "react";

const Carrito = () => {
	const history = useHistory();
	const { carrito, setCarrito } = useContext(CartContext);

	localStorage.setItem("cart", JSON.stringify(carrito));

	const borrarProducto = (pizza) => {
		let validar = window.confirm(
			`¿Desea eliminar del carrito la pizza ${pizza.sabor}?`
		);
		if (validar) {
			const prueba = carrito.pizzas.filter((x) => x.id !== pizza.id);

			setCarrito({
				...carrito,
				pizzas: prueba,
				total: carrito.total - pizza.cantidad,
				costo: carrito.costo - pizza.precio * pizza.cantidad,
			});
		}
	};

	const crearPedido = () => {
		if (JSON.parse(localStorage.getItem("auth"))) {
			let validarPedido = window.confirm(`¿Desea realizar el pedido?`);
			if (validarPedido) {
				postPedido().then((respuesta) => {
					if (respuesta.errors) {
						return window.alert(respuesta.errors[0].msg);
					}
					if (respuesta.msg) {
						window.alert(respuesta.msg);
					}
				});
			}
		} else {
			setTimeout(() => {
				history.push("/login");
			}, 1000);
		}
	};

	return (
		<>
			{carrito.total === 0 ? (
				<div className="container mt-5 ">
					<div className="row">
						<div className="col text-center">
							<img src={cartEmpty} className="w-25" alt="carrito vacío" />
							<h1>Tu carrito esta vacio</h1>
							<Link to="/shop">
								<button className="btn btn-color ">
									<h4>Seguir comprando →</h4>
								</button>
							</Link>
						</div>
					</div>
				</div>
			) : (
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
										<Link to="/shop">
											<p className=" mt-2 text-black">Seguir comprando →</p>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Carrito;
