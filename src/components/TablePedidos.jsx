import React, { useState, useEffect } from "react";
import { getPedidos, deletePedido, putPedido } from "../helpers/pedido";
import BtnPaginacion from "./BtnPaginacion";

const TablePedidos = () => {
	const [pedidos, setPedidos] = useState({
		datos: [],
		loading: true,
	});

	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);

	const [show] = useState(false);

	useEffect(() => {
		getPedidos().then((respuesta) => {
			setPedidos({
				datos: respuesta.pedidos,
				loading: false,
			});
			setTotpag(respuesta.Total);
		});
	}, []);

	const [order, setOrder] = useState([]);

	useEffect(() => {
		updateDatos(pagina);
	}, [pagina, show]);

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
				<div className="mb-5 table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Total</th>
								<th scope="col">Estado</th>
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
											className="btn btn-danger ms-1"
											onClick={() => borrarPedido(pedidos._id)}
										>
											<i className="fa fa-trash-o" aria-hidden="true"></i>
										</button>
										<button
											className="btn btn-info ms-1"
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
					<div className="text-center">
						<BtnPaginacion
							totPag={totPag}
							pagina={pagina}
							setPagina={setPagina}
						/>
					</div>

					<div
						className="modal fade"
						id="exampleModal"
						tabIndex="-1"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content ">
								<div className="modal-header ">
									<h5 className="modal-title " id="exampleModalLabel">
										Detalle
									</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body table-responsive">
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
													<td>{pedido.sabor}</td>
													<td>${pedido.precio}</td>
													<td>{pedido.cantidad}</td>
													<td>${pedido.subtotal}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-danger"
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
