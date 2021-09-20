import React, { useState, useEffect } from "react";
import { getPedidos, deletePedido, putPedido } from "../helpers/pedido";
import BtnPaginacion from "./BtnPaginacion";
//import ModalPedidos from "./Modals/ModalPedidos";

const TablePedidos = () => {
	const [Mostrar, setMostrar] = useState("");

	const [pedidos, setPedidos] = useState({
		datos: [],
		loading: true,
	});

	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);

	const [show, setShow] = useState(false);

	useEffect(() => {
		getPedidos().then((respuesta) => {
			setPedidos({
				datos: respuesta.pedidos,
				loading: false,
			});
			setTotpag(respuesta.Total);
		});
	}, []);

	//Agregado de Nico
	const [order, setOrder] = useState([]);

	useEffect(() => {
		updateDatos(pagina);
	}, [pagina, show]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const updateDatos = (pag) => {
		getPedidos(pag).then((respuesta) => {
			setPedidos({
				datos: respuesta.pedidos,
				loading: false,
			});
		});
	};

	//---------------------------

	const borrarPedido = (uid) => {
		let pe = pedidos.datos.find((pedido) => {
			return pedido._id === uid;
		});

		let validar = window.confirm(
			`Esta seguro que quiere borrar el pedido de ${pe.usuario.nombre}?`
		);
		if (validar) {
			deletePedido(uid).then((respuesta) => {
				if (respuesta.msg) {
					window.alert(respuesta.msg);
				}
				updateDatos(pagina);
			});
		}
	};

	const cambiarRealizado = (uid) => {
		let pe = pedidos.datos.find((pedido) => {
			return pedido._id === uid;
		});

		let validar = window.confirm(
			`Esta seguro que quiere cambiar la opcion Realizado del pedido de ${pe.usuario.nombre}?`
		);
		if (validar) {
			putPedido(uid).then((respuesta) => {
				if (respuesta.msg) {
					window.alert(respuesta.msg);
				}
				updateDatos(pagina);
			});
		}
	};

	return (
		<>
			{pedidos.loading ? (
				<div className="alert alert-success text-center" role="alert">
					Cargando...
				</div>
			) : (
				<div className="mb-5">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">nombre</th>
								<th scope="col">total</th>
								<th scope="col">costo</th>
								<th scope="col">realizado</th>
							</tr>
						</thead>
						<tbody>
							{pedidos.datos.map((pedidos) => (
								<tr key={pedidos._id}>
									<th scope="row">{pedidos.usuario.nombre}</th>

									<td>{pedidos.total}</td>
									<td>${pedidos.costo}</td>
									<td>{pedidos.realizado ? "Listo" : "Pendiente"}</td>

									<td>
										<button
											className="btn btn-warning ms-2"
											onClick={() => cambiarRealizado(pedidos._id)}
										>
											<i
												className="fa fa-pencil-square-o"
												aria-hidden="true"
											></i>
										</button>
										<button
											className="btn btn-danger ms-2"
											onClick={() => borrarPedido(pedidos._id)}
										>
											<i className="fa fa-trash-o" aria-hidden="true"></i>
										</button>
										<button
											className="btn btn-info ms-2"
											onClick={() => setOrder(pedidos.pizzas)}
											data-bs-toggle="modal"
											data-bs-target="#exampleModal"
										>
											<i className="fa fa-info-circle" aria-hidden="true"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<BtnPaginacion
						totPag={totPag}
						pagina={pagina}
						setPagina={setPagina}
					/>

					{/* modal */}

					<div
						class="modal fade"
						id="exampleModal"
						tabindex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div class="modal-dialog">
							<div class="modal-content ">
								<div class="modal-header ">
									<h5 class="modal-title " id="exampleModalLabel">
										Detalle
									</h5>
									<button
										type="button"
										class="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div class="modal-body table-responsive">
									<table className="table ">
										<thead>
											<tr className="text-center">
												<th scope="col">Pizza</th>
												<th scope="col">Precio</th>
												<th scope="col">Cantidad</th>
												<th scope="col">Subtotal</th>
											</tr>
										</thead>
										<tbody className="text-center">
											{order.map((pedido) => (
												<tr key={pedido._id}>
													{/* <th scope="row">{pedido.fecha}</th> */}
													<td>{pedido.sabor}</td>
													<td>${pedido.precio}</td>
													<td>{pedido.cantidad}</td>
													<td>${pedido.subtotal}</td>
													{/* <td>{pedido.cantidad}</td>
                        <td>${pedido.costo}</td> */}
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div class="modal-footer">
									<button
										type="button"
										class="btn btn-danger"
										data-bs-dismiss="modal"
									>
										Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TablePedidos;
