import React from "react";
import piza1 from "../assets/pizzas/1.png";
import piza2 from "../assets/pizzas/2.png";
import piza3 from "../assets/pizzas/3.png";
import piza4 from "../assets/pizzas/4.png";
import piza5 from "../assets/pizzas/5.png";

const PizzaCarousel = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide container"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<div className="row">
						<div className="col-6 col-md-2">
							<img
								src={piza1}
								className="d-block w-100"
								alt="pizza destacada 1"
							/>
						</div>
						<div className="col-6 col-md-2">
							<img
								src={piza2}
								className="d-block w-100"
								alt="pizza destacada 2"
							/>
						</div>
						<div className="col-6 col-md-2">
							<img
								src={piza3}
								className="d-block w-100"
								alt="pizza destacada 3"
							/>
						</div>
						<div className="col-6 col-md-2">
							<img
								src={piza4}
								className="d-block w-100"
								alt="pizza destacada 4"
							/>
						</div>
						<div className="col-6 col-md-2">
							<img
								src={piza5}
								className="d-block w-100"
								alt="pizza destacada 5"
							/>
						</div>
						<div className="col-6 col-md-2">
							<img
								src={piza1}
								className="d-block w-100"
								alt="pizza destacada 1"
							/>
						</div>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default PizzaCarousel;
