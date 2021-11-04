import React from "react";
import { useContext } from "react";
import CartContext from "./CartContext";

const ShopCard = ({ pizzas }) => {
	const { carrito, setCarrito } = useContext(CartContext);

	localStorage.setItem("cart", JSON.stringify(carrito));

	const guardarPizza = (pizza) => {
		const object =
			carrito.pizzas && carrito.pizzas.find((x) => x.id === pizza._id);

		if (object) {
			object.cantidad = object.cantidad + 1;
			object.subtotal = object.precio * object.cantidad;

			const prueba = carrito.pizzas.filter((x) => x.id !== pizza._id);

			prueba.push(object);

			setCarrito({
				...carrito,
				pizzas: prueba,
				total: carrito.total + 1,
				costo: carrito.costo + object.precio,
			});
		} else {
			const objetoPizza = {
				id: pizza._id,
				sabor: pizza.nombre,
				precio: pizza.precio,
				subtotal: pizza.precio,
				cantidad: 1,
			};
			const pizzasNueva = carrito.pizzas.push(objetoPizza);

			setCarrito({
				...carrito,
				pizzas: pizzasNueva,
			});

			setCarrito({
				...carrito,
				total: carrito.total + 1,
				costo: carrito.costo + objetoPizza.precio,
			});
		}
	};

	return (
		<>
			<div className="row row-cols-1 row-cols-md-3 g-4 ">
				{pizzas.map((pizza) => (
					<div
						className="col d-flex justify-content-between align-items-center flex-column"
						key={pizza._id}
					>
						<div className="card card-pizza ">
							<img
								src={pizza.img}
								className="card-img-top"
								alt={pizza.nombre}
							/>
							<div className="card-body h-100 ">
								<div className="row">
									<div className="col">
										<h5 className="card-title text-start">{pizza.nombre}</h5>
									</div>
									<div className="col">
										<h5 className="card-title text-end">${pizza.precio}</h5>
									</div>
								</div>

								<div className="card-footer bg-white p-0">
									<p className="card-text text-center mt-3">{pizza.detalle}</p>
								</div>
							</div>
						</div>
						<button
							className="btn btn-color col-12 text-white mt-2"
							onClick={() => guardarPizza(pizza)}
						>
							+ AÑADIR AL CARRITO
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default ShopCard;
