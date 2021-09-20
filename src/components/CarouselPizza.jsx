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
						<h1>
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
	);
};

export default CarouselPizza;
