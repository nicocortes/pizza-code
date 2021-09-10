import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const CarouselPizza = () => {
	return (
		<div style={{ display: "block", width: 100 }}>
			<Carousel>
				<Carousel.Item interval={1500}>
					<img className="d-block w-100" src={img1} alt="img1" />
					<Carousel.Caption>
						<h3>
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className="d-block w-100" src={img2} alt="img2" />
					<Carousel.Caption>
						<h3>
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className="d-block w-100" src={img3} alt="img3" />
					<Carousel.Caption>
						<h3>
							En cualquier ocasion..
							<p>PizzaCode</p>
						</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CarouselPizza;
