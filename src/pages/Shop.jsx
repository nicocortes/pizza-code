import React, { useState, useEffect, useContext } from "react";
import { getPizzas } from "../helpers/pizza";
import BtnPaginacion from "../components/BtnPaginacion";

import ShopCard from "../components/ShopCard";
import ShopContext from "../components/ShopContext";

const Shop = () => {
	const { shop, setShop } = useContext(ShopContext);
	const [pizzas, setPizzas] = useState({
		datos: [],
		total: 0,
		totalCategorias: 0,
		loading: true,
	});
	const [pagina, setPagina] = useState(0);
	const [totPag, setTotpag] = useState(0);
	useEffect(() => {
		getPizzas(shop).then((respuesta) => {
			setPizzas({
				datos: respuesta.pizzasPublicadas,
				total: respuesta.publicados,
				totalCategorias: respuesta.totalCategorias,
				loading: false,
			});
			setTotpag(respuesta.totalxCat);
		});
	}, [shop]);

	useEffect(() => {
		getPizzas(shop, pagina).then((respuesta) => {
			setPizzas({
				datos: respuesta.pizzasPublicadas,
				total: respuesta.publicados,
				totalCategorias: respuesta.totalCategorias,
				loading: false,
			});
		});
	}, [pagina, shop]);

	const activo = (value) => {
		if (shop === value) {
			const estilo = {
				fontWeight: "bold",
			};

			return estilo;
		}
	};

	return (
		<div>
			{pizzas.loading ? (
				<div className="alert alert-success text-center" role="alert">
					Cargando...
				</div>
			) : (
				<div className="container">
					<div className="row">
						<div className="col mt-5 text-center text-md-start">
							<h3>Categorías</h3>
							<p
								type="button"
								onClick={() => {
									setShop("CLASICA");
									setPagina(0);
									setTotpag(pizzas.totalCategorias.clasicas);
								}}
								style={activo("CLASICA")}
							>
								Clasicas ({pizzas.totalCategorias.clasicas})
							</p>
							<p
								type="button"
								onClick={() => {
									setShop("ESPECIALIDAD DE LA CASA");
									setPagina(0);
									setTotpag(pizzas.totalCategorias.especialidad);
								}}
								style={activo("ESPECIALIDAD DE LA CASA")}
							>
								Especialidad de la casa ({pizzas.totalCategorias.especialidad})
							</p>
							<p
								type="button"
								onClick={() => {
									setShop("SIN TAC");
									setPagina(0);
									setTotpag(pizzas.totalCategorias.sinTacc);
								}}
								style={activo("SIN TAC")}
							>
								Sin TACC ({pizzas.totalCategorias.sinTacc})
							</p>
							<p
								type="button"
								onClick={() => {
									setShop("A LA PIEDRA");
									setPagina(0);
									setTotpag(pizzas.totalCategorias.aLaPiedra);
								}}
								style={activo("A LA PIEDRA")}
							>
								A la piedra ({pizzas.totalCategorias.aLaPiedra})
							</p>
							<hr />
							<p
								type="button"
								onClick={() => {
									setShop("todo");
									setPagina(0);
									setTotpag(pizzas.total);
								}}
								style={activo("todo")}
							>
								Todas ({pizzas.total})
							</p>
						</div>
						<div className="col-12 col-md-9 mt-5">
							<ShopCard pizzas={pizzas.datos} />
						</div>
					</div>
				</div>
			)}
			<div className="d-flex justify-content-center my-3">
				<BtnPaginacion pagina={pagina} totPag={totPag} setPagina={setPagina} />
			</div>
		</div>
	);
};

export default Shop;
