
const calcularVelocidad = (distancia, tiempo) => {
	const velocidad = distancia / tiempo;
	console.log("La velocidad del móvil es " + velocidad);
		return velocidad
	}


	calcularVelocidad(10,2);
	calcularVelocidad(100,3);
	calcularVelocidad(75,3);
	const velocidad1 = calcularVelocidad(10,2);
	console.log("La velocidad de Juana es " + velocidad1);