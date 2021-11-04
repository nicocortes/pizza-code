import React, { useState } from "react";
import RegisterFrom from "../components/RegiterForm";

//importa las funciones
// que hay en helpers
// para poder usarlas
import { postUsuario } from "../helpers/usuario";

//funcion principal
//componente Register
const Register = () => {
	//variable para saber si el componente
	//esta montado
	//const isMounted = useRef(true);
	const [usuarios, setUsuarios] = useState([]);

	// crea un estado "formValue" para el formulario
	// es un estado donde almacenamos los valores
	// que tienen los datos del formulario.
	const [formValue, setFormValue] = useState({
		nombre: "",
		email: "",
		password: "",
		rol: "",
	});

	/*
    useEffect(() => {
        setFormValue({
          nombre: "",
          email: "",
          password: "",
          rol: "",
          estado: true,
        });
        if (actualizar) {
            getPizza(actualizar).then((respuesta) => {
            setFormValue({
                nombre: respuesta.pizza.nombre,
                precio: respuesta.pizza.precio,
                detalle: respuesta.pizza.detalle,
                categoria: respuesta.pizza.categoria,
                disponible: respuesta.pizza.disponible,
            });
        });
    }, [actualizar]);
    }*/

	//Evento handleSubmit
	//esta funcion se ejecuta cuando el usuario
	//toca el boton del formulario

	const handleSubmit = (e) => {
		e.preventDefault();

		//extraemos los datos desde formValue
		//desestructuracion
		const { nombre, email, password, rol } = formValue;

		if (nombre && email && password && rol) {
			//si tienen informacion estas variables

			//peticion
			//llama al metodo POST
			// se manda los valores del formulario que estan
			// almacenados en formValue
			postUsuario(formValue).then((respuesta) => {
				setUsuarios(respuesta);
				setFormValue({
					nombre: "",
					email: "",
					password: "",
					rol: "",
					estado: true,
				});
			});
		}
	};

	return (
		<div className="mt-5">
			<RegisterFrom />
		</div>
	);
};

export default Register;
