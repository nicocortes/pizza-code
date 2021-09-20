import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/img5.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img1.jpg";

const CarouselPizza = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-principal "
						src={img1}
						alt="img1"
					/>
					<Carousel.Caption className="carousel-info">
						<h1>
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-principal "
						src={img2}
						alt="img2"
					/>
					<Carousel.Caption className="carousel-info">
						<h1 className="fst-italic d-none d-md-block">
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 carousel-principal"
						src={img3}
						alt="img3"
					/>
					<Carousel.Caption className="carousel-info">
						<h1>
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h1>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>

		// <div
		// 	id="carousel"
		// 	className="carousel slide carousel-fade"
		// 	data-bs-ride="carousel"
		// >
		// 	<div className="carousel-inner">
		// 		<div className="carousel-item active">
		// 			<img src={img1} className="d-block w-100 " alt="coffee1" />
		// 		</div>
		// 		<div className="carousel-item">
		// 			<img src={img2} className="d-block w-100" alt="cofee2" />
		// 		</div>
		// 		<div className="carousel-item">
		// 			<img src={img3} className="d-block w-100" alt="cofee2" />
		// 		</div>
		// 		<div className="hijo">
		// 			<h3>
		// 				En cualquier ocasion.. <p>PizzaCode</p>
		// 			</h3>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default CarouselPizza;
