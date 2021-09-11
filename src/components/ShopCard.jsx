import React, { useState, useEffect } from "react";

const ShopCard = ({ pizzas }) => {
	let data = JSON.parse(localStorage.getItem("cart")) || [];

	const [pedido, setPedido] = useState(data);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(pedido));
	}, [pedido]);

	const savePizza = (e) => {
		e.preventDefault();

		const [{ _id, nombre }] = pizzas;
		setPedido([...pedido, { id: _id, sabor: nombre }]);
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
								<button onClick={savePizza}>agregar al carrito</button>

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
