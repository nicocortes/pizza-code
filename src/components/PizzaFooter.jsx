import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const PizzaFooter = () => {
	return (
		<footer className="container-fluid   ">
			<div className="row footer-info">
				<div className="col-12 col-md-4 ">
					<h5 className="footer-social-title">Síguenos</h5>
					<Link to="#" className="me-3">
						<i className="fa fa-2x fa-facebook text-white"></i>
					</Link>
					<Link to="#" className="me-3">
						<i className="fa fa-2x fa-twitter text-white"></i>
					</Link>
					<Link to="#">
						<i className="fa fa-2x fa-instagram text-white"></i>
					</Link>
				</div>
				<div className="col-12 col-md-4">
					<Link className="text-decoration-none text-white" to="/">
						<img src={logo} alt="logo" className="logo" />
						<h5>PizzaCode</h5>
					</Link>
				</div>
				<div className="col-12 col-md-4">
					<span>
						Tucumán, Argentina
						<br />
						+543814456699
						<br /> pizzacode@gmail.com
					</span>
				</div>
			</div>
			<div className="row footer-copyright">
				<small>&copy; PizzaCode 2021. Todos los derechos reservados.</small>
			</div>
		</footer>
	);
};

export default PizzaFooter;
