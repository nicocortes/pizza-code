import React from "react";
import {Card} from "react-bootstrap";
import image1 from "../assets/image1.jpg"
import { Link } from "react-router-dom";


const Nosotros =()=>{
    return(
        
        <div id="bg-2" className="container-fluid container-full-width">
                <div className="row d-flex justify-content-center align-items-center font-weight-bold flex-column text-center">
                   <div className="col">
                       <h1 className="text-uppercase font-weight-bold mt-5">conozcanos mas...</h1>
                   </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center">
                        <img className="img-fluid" src={image1} alt="imagen de la pizzeria" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 align-items-center">
                        <h5 className="text-uppercase font-weight-bold mt-5">Breve historia de quienes somos y a que venimos:</h5>
                        <h5>La historia comienza cuando se abrio en diciembre del año 1979 PÌZZA-CODE, convirtiéndose con su personal estilo.
                        Estilo que todavía hoy, después de tantos años, se mantiene intacto.
                        En PIZZA-CODE, la pizza se prepara siempre al momento cuando la pide el cliente y completamente a su gusto.
                        La elección de productos de calidad, así como el cuidado de los detalles de su elaboración y conservación, ha hecho posible en todos estos años, mantener y mejorar la calidad, tan apreciada y reconocida por nuestros fieles clientes.
                        Fueron precisamente ellos los que crearon nuestro slogan “Siempre fresca. Siempre buena” frase que repiten cuando les servimos su pizza.
                        Hoy en día puedo decir que me siento privilegiado de poder dirigir «la pizzería tradicional más antigua de Tucuman». Donde preparamos la masa fresca a diario, para ofrecer a nuestros clientes el sabor genuino de la pizza italiana.</h5>
                    </div>
                </div>
            <div
                id="overlay"
                className="row d-flex justify-content-center align-items-center font-weight-bold container-presentation flex-column text-center">
                <h1 className="text-uppercase font-weight-bold mt-5">Nuestro equipo:</h1>
                <h5 className="text-uppercase font-weight-light">El mejor triangulo amoroso, es una rebanada de pizza <p>Y nosotros lo hacemos posible...</p></h5>
            </div> 
        <div className="row d-flex justify-content-center align-items-center flex-wrap ">
                <div className=" card-perfil col ">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://i.pinimg.com/474x/64/56/8b/64568b065c1ea66a9ff1cbdee5ee8661.jpg"/>
                        <Card.Body>
                            <Card.Title>Laura Bono</Card.Title>
                            <Link to="*" className="me-3">
						<i className="fa fa-2x fa-facebook text-white"></i>
					</Link>
					<Link to="*" className="me-3">
						<i className="fa fa-2x fa-twitter text-white"></i>
					</Link>
					<Link to="*">
						<i className="fa fa-2x fa-instagram text-white"></i>
					</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card-perfil col">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://bootdey.com/img/Content/avatar/avatar6.png"/>
                        <Card.Body>
                            <Card.Title>Roberto Villafañe</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" card-perfil col">
                    <Card  style={{ width: '15rem' }}>
                        <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR2EmeDnAttbXXbBr_HtCX1qjGmUoSlP1_Q&usqp=CAU"/>
                        <Card.Body>
                        <Card.Title>Nicolas Cortez</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" card-perfil col">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
                        <Card.Body>
                        <Card.Title>Ricardo Gauna</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="card-perfil  col" >
                    <Card  style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXvLk_eVcmAf2YQKIz7z1ftVLvpzKAxgCcQ&usqp=CAU" />
                        <Card.Body>
                        <Card.Title>Nataly Gutierrez</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>

    
     </div>   
    )
};
export default Nosotros;