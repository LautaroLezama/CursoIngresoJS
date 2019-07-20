function mostrar() {

	var num1 = 0;
	var acumulador = 0;
	var contador = 0;

	while (contador < 5) {

		num1 = prompt("Digite el número");

		num1 = parseInt(num1);

		acumulador = acumulador + num1;	

		contador ++;

	}


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN