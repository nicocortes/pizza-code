const url = "http://localhost:8080/api/pizzas";

export const getPizzas = async (desde) => {
	const resp = await fetch(`${url}?desde=${desde}`, {
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
