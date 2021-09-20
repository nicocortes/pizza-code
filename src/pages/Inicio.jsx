import React from "react";
import CarouselPizza from "../components/CarouselPizza";
import PizzaCarousel from "../components/PizzaCarousel";
import CategoriaCard from "../components/CategoriaCard";

const Inicio = () => {
	return (
		<div>
			<CarouselPizza />
			<div className="my-5">
				<CategoriaCard />
			</div>
			<div className="container mt-5 mb-3">
				<div className="row w-75 m-auto bg-color-red bg-color-red text-center text-white">
					<h1>Destacadas</h1>
				</div>
			</div>
			<PizzaCarousel />
		</div>
	);
};

export default Inicio;
