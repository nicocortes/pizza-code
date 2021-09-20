import React from "react";
import error from "../assets/error.png";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col text-center mt-5">
						<img src={error} alt="error 404" className="w-50 " />
					</div>
				</div>
				<div className="row text-center">
					<h1>PÁGINA NO ENCONTRADA</h1>
					<h5>
						¡No te preocupes! Estamos trabajando para que tengas la mejor
						experiencia.
					</h5>
				</div>
				<div className="row">
					<div className="col text-end">
						<Link to="/">
							<button className="btn btn-color">INICIO</button>{" "}
						</Link>
					</div>
					<div className="col text-start">
						<Link to="/contacto">
							<button className="btn btn-color-red text-white">
								CONTÁCTANOS
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error404;
