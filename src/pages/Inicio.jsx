import React from "react";
import PizzaNav from "../components/PizzaNav";
import PizzaCarousel from "../components/PizzaCarousel";
import PizzaFooter from "../components/PizzaFooter";
import CategoriaCard from "../components/CategoriaCard";

const Inicio = () => {
	return (
		<div>
			<PizzaNav />
			<CategoriaCard />
			<PizzaCarousel />
			<PizzaFooter />
		</div>
	);
};

export default Inicio;
