const url = "http://localhost:8080/api/pizzas";

// GET PIZZAS

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

//GET PIzza Traer Pizza por Id
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
  
  //POST Pizza Crear Pizza
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
  
  //PUT Pizza Actualizar Pizza
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
  
  //DELETE Pizza - Borrar Pizza
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
  






