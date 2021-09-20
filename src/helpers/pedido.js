const url = "https://pizza-code.herokuapp.com/api/pedidos";

export const postPedido = async (data) => {
	const resp = await fetch(url, {
		method: "POST",
		body: localStorage.getItem("cart"),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};

export const getPedidosUser = async (id) => {
	const resp = await fetch(`${url}/user/${id}`, {
		method: "GET",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};

export const getPedidos = async (desde) => {
	const resp = await fetch(`${url}?desde=${desde}`, {
		method: "GET",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};

//GET Pedido Traer Pedido por Id
export const getPedido = async (id) => {
	const resp = await fetch(`${url}/${id}`, {
		method: "GET",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};

export const putPedido = async (id) => {
	const resp = await fetch(`${url}/${id}`, {
		method: "PUT",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};

//DELETE Pedido - Borrar Pedido
export const deletePedido = async (id) => {
	const resp = await fetch(`${url}/${id}`, {
		method: "DELETE",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};
