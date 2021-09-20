import React, { useState, useEffect } from "react";
import piza1 from "../assets/pizzas/1.png";
import piza2 from "../assets/pizzas/2.png";
import piza3 from "../assets/pizzas/3.png";
import piza4 from "../assets/pizzas/4.png";
import piza5 from "../assets/pizzas/5.png";

const PizzaCarousel = () => {
	return (
		<div
			id="carouselExampleControls"
			class="carousel slide container"
			data-bs-ride="carousel"
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div className="row">
						<div className="col-6 col-md-2">
							<img src={piza1} class="d-block w-100" alt="pizza destacada 1" />
						</div>
						<div className="col-6 col-md-2">
							<img src={piza2} class="d-block w-100" alt="pizza destacada 2" />
						</div>
						<div className="col-6 col-md-2">
							<img src={piza3} class="d-block w-100" alt="pizza destacada 3" />
						</div>
						<div className="col-6 col-md-2">
							<img src={piza4} class="d-block w-100" alt="pizza destacada 4" />
						</div>
						<div className="col-6 col-md-2">
							<img src={piza5} class="d-block w-100" alt="pizza destacada 5" />
						</div>
						<div className="col-6 col-md-2">
							<img src={piza1} class="d-block w-100" alt="pizza destacada 1" />
						</div>
					</div>
				</div>
			</div>
			<button
				class="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button
				class="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default PizzaCarousel;
