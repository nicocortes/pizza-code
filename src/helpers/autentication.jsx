const url = "https://pizza-code.herokuapp.com";

export const postAuth = async (data) => {
	const resp = await fetch(`${url}/api/auth/login`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	});
	const datos = await resp.json();

	return datos;
};
