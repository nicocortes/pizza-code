import React from "react";
import CarouselPizza from "../components/CarouselPizza";
import PizzaNav from "../components/PizzaNav";
import PizzaCarousel from "../components/PizzaCarousel";
import PizzaFooter from "../components/PizzaFooter";
import CategoriaCard from "../components/CategoriaCard";

const Inicio = () => {
	return (
		<div>
			<PizzaNav />
			<CarouselPizza />
			<CategoriaCard />
			<PizzaCarousel />
			<PizzaFooter />
		</div>
	);
};

export default Inicio;
