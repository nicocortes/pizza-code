import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Shop from "./pages/Shop";
import Carrito from "./pages/Carrito";
import PizzaNav from "./components/PizzaNav";
import PizzaFooter from "./components/PizzaFooter";

const App = () => {
	let data = JSON.parse(localStorage.getItem("cart")) || {
		cantidad: 0,
		costo: 0,
		pizzas: [],
	};
	const [carrito, setCarrito] = useState(data);
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(carrito));
	}, [carrito]);
	return (
		<Router>
			<PizzaNav carrito={carrito} />
			<Switch>
				<Route exact path="/" component={Inicio} />
				<Route exact path="/contacto" component={Contacto} />
				<Route
					exact
					path="/shop"
					component={() => <Shop carrito={carrito} setCarrito={setCarrito} />}
				/>

				<Route
					exact
					path="/carrito"
					component={() => <Carrito carrito={carrito} />}
				/>
			</Switch>
			<PizzaFooter />
		</Router>
	);
};

export default App;
