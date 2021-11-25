import React from "react";
import { Link, useHistory } from "react-router-dom";
import { postPedido } from "../helpers/pedido";
import cartEmpty from "../assets/cart-empty.png";
import CartContext from "../components/CartContext";
import Swal from "sweetalert2";
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

	const restarProducto = (pizza) => {
		const pedido = carrito.pizzas.map(function (dato) {
			if (dato.id === pizza.id) {
				dato.cantidad = dato.cantidad - 1;
				dato.subtotal = dato.precio * dato.cantidad;
			}

			return dato;
		});

		let sumaSubtotales = 0;
		for (let i = 0; i < pedido.length; i++) {
			sumaSubtotales += pedido[i].subtotal;
		}

		setCarrito({
			...carrito,
			pizzas: pedido,
			total: carrito.total - 1,
			costo: sumaSubtotales,
		});
	};

	const sumarProducto = (pizza) => {
		const pedido = carrito.pizzas.map(function (dato) {
			if (dato.id === pizza.id) {
				dato.cantidad = dato.cantidad + 1;
				dato.subtotal = dato.precio * dato.cantidad;
			}

			return dato;
		});

		let sumaSubtotales = 0;
		for (let i = 0; i < pedido.length; i++) {
			sumaSubtotales += pedido[i].subtotal;
		}

		setCarrito({
			...carrito,
			pizzas: pedido,
			total: carrito.total + 1,
			costo: sumaSubtotales,
		});
	};

	const disableButton = (pizza) => {
		if (pizza.cantidad > 1) {
			return false;
		} else {
			return true;
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
					Swal.fire({
						icon: "success",
						title: "Muchas gracias!",
						text: "Tu pedido se ha realizado con éxito!",
					});
					setTimeout(() => {
						history.push("/micuenta");
					}, 1000);
				});
			}
		} else {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Debes loguearte para realizar el pedido",
			});
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
							<div className="card table-responsive mt-5 ">
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
											<tr key={pizza.id}>
												<th scope="row">{pizza.sabor}</th>
												<td>${pizza.precio}</td>
												<td>
													<div className="row">
														<div className="col text-end pe-0">
															<button
																className=" py-0 px-1 btn btn-secondary boton-carrito"
																onClick={() => restarProducto(pizza)}
																disabled={disableButton(pizza)}
															>
																-
															</button>
														</div>
														<div className="col p-0 m-auto">
															<span>{pizza.cantidad}</span>
														</div>

														<div className="col text-start ps-0">
															<button
																className="btn btn-secondary py-0 px-1 boton-carrito "
																onClick={() => sumarProducto(pizza)}
															>
																+
															</button>
														</div>
													</div>
												</td>
												<td>
													<button
														className="btn btn-danger ms-2 "
														onClick={() => borrarProducto(pizza)}
													>
														<i className="fa fa-trash-o" aria-hidden="true"></i>
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
								<div className="row text-center px-0">
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
