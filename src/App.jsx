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

const App = () => {
	const changuito = JSON.parse(localStorage.getItem("cart")) || {
		total: 0,
		costo: 0,
		pizzas: [],
	};
	const user = JSON.parse(localStorage.getItem("auth")) || {};

	const [carrito, setCarrito] = useState(changuito);
	const [usuario, setUsuario] = useState(user);
	return (
		<CartContext.Provider value={{ carrito, setCarrito, usuario, setUsuario }}>
			<Router>
				<PizzaNav />

				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route exact path="/contacto" component={Contacto} />
					<Route exact path="/shop" component={Shop} />
					<Route exact path="/micuenta" component={MiCuenta} />
					<Route exact path="/carrito" component={Carrito} />
				</Switch>
				<PizzaFooter />
			</Router>
		</CartContext.Provider>
	);
};

export default App;
