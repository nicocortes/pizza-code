const url = "http://localhost:8080/api/pedidos";

export const postPedido = async () => {
	const resp = await fetch(url, {
		method: "POST",
		body: JSON.parse(localStorage.getItem("cart")),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};
