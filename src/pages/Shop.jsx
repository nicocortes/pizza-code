import React, { useState, useEffect } from "react";
import { getPizzas } from "../helpers/pizza";
import BtnPaginacion from "../components/BtnPaginacion";

import ShopCard from "../components/ShopCard";

const Shop = () => {
	const [pizzas, setPizzas] = useState([]);
	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);

	useEffect(() => {
		getPizzas().then((respuesta) => {
			setPizzas(respuesta.pizzas);
			setTotpag(respuesta.Total);
		});
	}, []);

	useEffect(() => {
		getPizzas(pagina).then((respuesta) => {
			setPizzas(respuesta.pizzas);
		});
	}, [pagina]);

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col"></div>
					<div className="col-12 col-md-9 mt-5">
						<ShopCard pizzas={pizzas} />
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center my-3">
				<BtnPaginacion pagina={pagina} totPag={totPag} setPagina={setPagina} />
			</div>
		</div>
	);
};

export default Shop;
