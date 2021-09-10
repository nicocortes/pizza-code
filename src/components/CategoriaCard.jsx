import React from "react";
import { Link } from "react-router-dom";
import sintacc from "../assets/sintacc.jpeg";
import clasicas from "../assets/clasicas.jpg";
import especialidad from "../assets/especialidad.jpeg";
import piedra from "../assets/piedra.png";

const CategoriaCard = () => {
	return (
		<div className="container">
			<div className="row ">
				<div className="col-12 col-md-6 mb-3 ">
					<Link to="/pizzas">
						<div className="card categorias-card ">
							<img
								src={clasicas}
								alt="Clasicas"
								className="card-img-top categorias-card"
							/>
							<div className="overlay d-flex align-items-end">
								<div className="container">
									<div className="row">
										<div className="col">
											<h3>CLASICAS</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-12 col-md-6 mb-3 ">
					<Link to="/pizzas">
						<div className="card categorias-card ">
							<img
								src={sintacc}
								alt="Sin Tacc"
								className="card-img-top categorias-card "
							/>
							<div className="overlay d-flex align-items-end">
								<div className="container">
									<div className="row">
										<div className="col">
											<h3>SIN TACC</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 mb-3">
					<Link to="/pizzas">
						<div className="card  categorias-card ">
							<img
								src={especialidad}
								alt="Especialidad"
								className="card-img-top categorias-card"
							/>
							<div className="overlay d-flex align-items-end">
								<div className="container">
									<div className="row">
										<div className="col">
											<h3>ESPECIALIDAD DE LA CASA</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-12 col-md-6">
					<Link to="/pizzas">
						<div className="card  categorias-card ">
							<img
								src={piedra}
								alt="A la piedra"
								className="card-img-top categorias-card"
							/>
							<div className="overlay d-flex align-items-end">
								<div className="container">
									<div className="row">
										<div className="col">
											<h3>A LA PIEDRA</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CategoriaCard;
