import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPedidosUser } from "../helpers/pedido";
import avatar from "../assets/avatar.png";

const MiCuenta = () => {
	const datos = JSON.parse(localStorage.getItem("auth"));
	const history = useHistory();
	const [pedidos, setPedidos] = useState([]);
	const [order, setOrder] = useState([]);

	useEffect(() => {
		getPedidosUser(datos.usuario._id).then((respuesta) => {
			setPedidos(respuesta.pedidos);
		});
	});

	if (!datos) {
		return (
			<div>
				<h1>Usuario no logueado</h1>
			</div>
		);
	}

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-12  ">
						<div className=" text-center">
							<img src={avatar} alt="avatar" className="w-25" />
						</div>
						<div className=" text-center">
							<h1>Bienvenido, {datos.usuario.nombre}!</h1>
						</div>
					</div>

					<div className="row text-center">
						<div className="col   text-nowrap">
							<button
								onClick={() => {
									localStorage.removeItem("auth");

									history.push("/login");
									window.location.reload();
								}}
								className="btn btn-color-red text-white "
							>
								Cerrar Sesión
							</button>
							{datos.usuario.rol === "ADMIN_ROLE" && (
								<Link to="/admin">
									<button className="btn btn-color ms-2">Administración</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<h3>Tus datos</h3>

					<div className="card ">
						<table className="table">
							<tbody className="text-center">
								<tr>
									<th scope="row">Nombre</th>
									<td>{datos.usuario.nombre}</td>
								</tr>
								<tr>
									<th scope="row">Email</th>
									<td>{datos.usuario.email}</td>
								</tr>
								<tr>
									<th scope="row">Domicilio</th>
									<td>
										{datos.usuario.domicilio ? datos.usuario.domicilio : "-"}
									</td>
								</tr>
								<tr>
									<th scope="row">Usuario</th>
									<td>
										{datos.usuario.rol === "ADMIN_ROLE"
											? "Administrador"
											: "Cliente"}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="row mt-5">
					<h3>Tus pedidos</h3>

					<div className="card table-responsive ">
						<table className="table ">
							<thead>
								<tr className="text-center">
									<th scope="col">N° Pedido</th>

									<th scope="col">Fecha</th>
									<th scope="col">Precio</th>
									<th scope="col">Detalle</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{pedidos.map((pedido) => (
									<tr key={pedido._id}>
										<td>{pedido._id}</td>
										<td>{pedido.Fecha}</td>
										<td>${pedido.costo}</td>
										<td>
											<button
												className="btn"
												onClick={() => {
													setOrder(pedido.pizzas);
												}}
												data-bs-toggle="modal"
												data-bs-target="#exampleModal"
											>
												<i className="fa fa-2x fa-info-circle text-danger"></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
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
		</div>
	);
};

export default MiCuenta;
