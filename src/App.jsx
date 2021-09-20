import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Shop from "./pages/Shop";
import Carrito from "./pages/Carrito";
import PizzaNav from "./components/PizzaNav";
import PizzaFooter from "./components/PizzaFooter";
import CartContext from "./components/CartContext";
import MiCuenta from "./pages/MiCuenta";
import Error404 from "./pages/Error404";

const App = () => {
	const changuito = JSON.parse(localStorage.getItem("cart")) || {
		total: 0,
		costo: 0,
		pizzas: [],
	};

	const [carrito, setCarrito] = useState(changuito);

	return (
		<CartContext.Provider value={{ carrito, setCarrito }}>
			<Router>
				<PizzaNav />

				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/micuenta" component={MiCuenta} />
					<Route exact path="/carrito" component={Carrito} />
					<Route component={Error404} />
				</Switch>
				<PizzaFooter />
			</Router>
		</CartContext.Provider>
	);
};

export default App;
