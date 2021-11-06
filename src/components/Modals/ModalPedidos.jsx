import React, { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";

import { getPedido } from "../../helpers/pedido";

const ModalPedidos = () => {
	const [loading, setLoading] = useState(false);

	const [pedidos, setPedidos] = useState({
		datos: [],
		loading: true,
	});

	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);

	useEffect(() => {
		getPedido(mostrar).then((respuesta) => {
			setPedidos({
				datos: respuesta.pedidos.items,
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
		getPedidos(pag).then((respuesta) => {
			setPedidos({
				datos: respuesta.pedidos,
				loading: false,
			});
		});
	};

	return (
		<div>
			<Modal show={show}>
				<Modal.Header closeButton>
					<Modal.Title>Detalle</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalPedidos;
