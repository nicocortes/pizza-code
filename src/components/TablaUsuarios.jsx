import React, { useEffect, useState } from "react";
import { getUsuarios, deleteUsuario } from "../helpers/usuario";
import BtnPaginacion from "./BtnPaginacion";
import ModalUsuarioAdd from "./Modals/ModalUsuarioAdd";

const TablaUsuario = () => {
	const [actualizar, setActualizar] = useState("");

	const [usuarios, setUsuarios] = useState({
		datos: [],
		loading: true,
	});

	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);

	const [show, setShow] = useState(false);

	useEffect(() => {
		getUsuarios().then((respuesta) => {
			setUsuarios({
				datos: respuesta.usuarios,
				loading: false,
			});
			setTotpag(respuesta.Total);
		});
	}, []);

	useEffect(() => {
		updateDatos(pagina);
	}, [pagina, show]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const updateDatos = (pag) => {
		getUsuarios(pag).then((respuesta) => {
			setUsuarios({
				datos: respuesta.usuarios,
				loading: false,
			});
		});
	};

	//---------------------------
	const borrarUsuario = (uid) => {
		const user = JSON.parse(localStorage.getItem("auth")).usuario;

		if (user._id === uid) {
			return window.alert("No puede eliminar el usuario en uso");
		}

		let validar = window.confirm(
			`Esta seguro que quiere eliminar este usuario?`
		);
		if (validar) {
			deleteUsuario(uid).then((respuesta) => {
				if (respuesta.msg) {
					window.alert(respuesta.msg);
				}
				updateDatos(pagina);
			});
		}
	};

	return (
		<>
			{usuarios.loading ? (
				<div className="alert alert-success text-center" role="alert">
					Cargando...
				</div>
			) : (
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Nombre</th>
								<th scope="col">Email</th>
								<th>
									<button
										className="btn btn-success"
										onClick={() => {
											setActualizar("");
											handleShow();
										}}
									>
										<i className="fa fa-user-plus" aria-hidden="true"></i>
									</button>
								</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{usuarios.datos.map((usuario) => (
								<tr key={usuario._id}>
									<th scope="row">{usuario.nombre}</th>
									<td>{usuario.email}</td>
									<th>
										<button
											className="btn btn-warning"
											onClick={() => {
												setActualizar(usuario._id);
												handleShow();
											}}
										>
											<i
												className="fa fa-pencil-square-o"
												aria-hidden="true"
											></i>
										</button>

										<button
											className="btn btn-danger mt-1 mt-lg-0 ms-lg-2"
											onClick={() => borrarUsuario(usuario._id)}
										>
											<i className="fa fa-trash-o " aria-hidden="true"></i>
										</button>
									</th>
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

					<ModalUsuarioAdd
						show={show}
						handleClose={handleClose}
						actualizar={actualizar}
					/>
				</div>
			)}
		</>
	);
};

export default TablaUsuario;
