const url = "http://localhost:8080/api/pedidos";

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

export const getPedidos = async (id) => {
	const resp = await fetch(`${url}/user/${id}`, {
		method: "GET",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};
