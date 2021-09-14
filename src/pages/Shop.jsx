import React, { useState, useEffect } from "react";
import { getPizzas } from "../helpers/pizza";
import BtnPaginacion from "../components/BtnPaginacion";
// import PizzaCard from "../components/PizzaCard";
import PizzaNav from "../components/PizzaNav";
import PizzaFooter from "../components/PizzaFooter";
import ShopCard from "../components/ShopCard";

const Shop = () => {
	const [pizzas, setPizzas] = useState([]);
	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);
	// console.log(pagina);
	useEffect(() => {
		getPizzas().then((respuesta) => {
			// console.log(respuesta);
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
			<PizzaNav />
			<div className="container">
				<div className="row">
					<div className="col"></div>
					<div className="col-12 col-md-10">
						<ShopCard pizzas={pizzas} />
					</div>
				</div>
			</div>

			<div className="d-flex justify-content-center my-3">
				<BtnPaginacion pagina={pagina} totPag={totPag} setPagina={setPagina} />
			</div>
			<PizzaFooter />
		</div>
	);
};

export default Shop;
