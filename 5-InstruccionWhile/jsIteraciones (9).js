function mostrar() {

	var contador = 0;
	var num1 = 0;
	var minimo
	var maximo
	// declarar variables

	var respuesta = 'si';

	while (respuesta == "si") {

		contador++;

		num1 = prompt("Ingrese un número");

		num1 = parseInt(num1);

		Math.max(num1);

		Math.min(num1);

		respuesta = prompt("si para seguir");

	}

	document.getElementById("minimo").value = minimo;

	document.getElementById("maximo").value = maximo;




}//FIN DE LA FUNCIÓN