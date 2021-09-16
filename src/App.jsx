import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Contacto from "./pages/Contacto";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin"
import Login from "./pages/Login";

const App = () => {
	return (
		<Router>
			<Switch>
			    <Route exact path="/" component={Login} />
				<Route exact path="/" component={Inicio} />
				<Route exact path="/contacto" component={Contacto} />
				<Route exact path="/shop" component={Shop} />
				<Route exact path="/Admin" component={Admin} />
			</Switch>
		</Router>
	);
};

export default App;
