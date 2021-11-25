import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Shop from "./pages/Shop";
import Carrito from "./pages/Carrito";
import PizzaNav from "./components/PizzaNav";
import PizzaFooter from "./components/PizzaFooter";
import CartContext from "./components/CartContext";
import ShopContext from "./components/ShopContext";
import MiCuenta from "./pages/MiCuenta";
import Error404 from "./pages/Error404";
import Nosotros from "./components/Nosotros";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
	const changuito = JSON.parse(localStorage.getItem("cart")) || {
		total: 0,
		costo: 0,
		pizzas: [],
	};

	const [carrito, setCarrito] = useState(changuito);
	const [shop, setShop] = useState("todo");
	return (
		<CartContext.Provider value={{ carrito, setCarrito }}>
			<ShopContext.Provider value={{ shop, setShop }}>
				<Router>
					<PizzaNav />
					<Switch>
						<Route exact path="/" component={Inicio} />
						<Route exact path="/shop" component={Shop} />
						<Route exact path="/contacto" component={Contacto} />
						<ProtectedRoute exact path="/micuenta" component={MiCuenta} />
						<Route exact path="/carrito" component={Carrito} />
						<ProtectedRoute exact path="/admin" component={Admin} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/nuestrahistoria" component={Nosotros} />
						<Route component={Error404} />
					</Switch>
					<PizzaFooter />
				</Router>
			</ShopContext.Provider>
		</CartContext.Provider>
	);
};

export default App;
