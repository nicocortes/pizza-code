const url = "https://pizza-code.herokuapp.com/api/pizzas";

export const getPizzas = async (categoria, desde) => {
	const resp = await fetch(`${url}/categoria/${categoria}?desde=${desde}`, {
		method: "GET",

		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};

export const getPizza = async (id) => {
	const resp = await fetch(`${url}/${id}`, {
		method: "GET",
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();
	return datos;
};

export const postPizza = async (data) => {
	const resp = await fetch(`${url}`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};

export const putPizza = async (id, data) => {
	const resp = await fetch(`${url}/${id}`, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
			"x-token": JSON.parse(localStorage.getItem("auth")).token,
		},
	});
	const datos = await resp.json();

	return datos;
};

export const deletePizza = async (id) => {
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
