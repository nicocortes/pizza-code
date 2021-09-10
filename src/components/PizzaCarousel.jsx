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
			class="carousel slide container"
			data-bs-ride="carousel"
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<div className="row">
						<div className="col">
							<img src={piza1} class="d-block w-100" alt="..." />
						</div>
						<div className="col">
							<img src={piza2} class="d-block w-100" alt="..." />
						</div>
						<div className="col">
							<img src={piza3} class="d-block w-100" alt="..." />
						</div>
						<div className="col">
							<img src={piza4} class="d-block w-100" alt="..." />
						</div>
						<div className="col">
							<img src={piza5} class="d-block w-100" alt="..." />
						</div>
					</div>
				</div>
				{/* <div class="carousel-item">
					<img src="..." class="d-block w-100" alt="..." />
				</div> */}
				{/* <div class="carousel-item">
					<img src="..." class="d-block w-100" alt="..." />
				</div> */}
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
