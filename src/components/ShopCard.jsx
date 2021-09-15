import React from "react";

const ShopCard = ({ pizzas, carrito, setCarrito }) => {
	const guardarPizza = (pizza, e) => {
		e.preventDefault();
		const object = carrito.pizzas.find((x) => x.id === pizza._id);
		const prueba = carrito.pizzas.filter((x) => x.id !== pizza._id);
		console.log(object);

		setCarrito({
			cantidad: carrito.cantidad + 1,
			costo: carrito.costo + pizza.precio,
			pizzas: [
				...carrito.pizzas,
				{
					id: pizza._id,
					sabor: pizza.nombre,
					precio: pizza.precio,
					cantidad: 1,
				},
			],
		});
	};

	return (
		<>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{pizzas.map((pizza) => (
					<div className="col" key={pizza._id}>
						<div className="card h-100">
							<img
								src="https://i.imgur.com/gAWrwE9.png"
								className="card-img-top"
								alt={pizza.nombre}
							/>
							<div className="card-body">
								<h5 className="card-title">{pizza.nombre}</h5>
								<strong>{pizza.categoria.nombre}</strong>
								<p className="card-text">{pizza.detalle}</p>
							</div>
							<div className="card-footer ">
								<button onClick={(e) => guardarPizza(pizza, e)}>
									agregar al carrito
								</button>

								{pizza.disponible ? (
									<div className="d-flex justify-content-between align-items-center">
										<span className="text-disponible">Disponible</span>
										<button className="btn btn-success">Elegir</button>
									</div>
								) : (
									<span className="text-nodisponible">No disponible</span>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ShopCard;
