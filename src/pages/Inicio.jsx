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
			<PizzaCarousel />
		</div>
	);
};

export default Inicio;
