function mostrar() {


	var num1;
	var contador = 0;
	var minimo;
	var maximo; 
	var respuesta = 'si';

	while (respuesta == "si") {

		contador ++;

		num1 = prompt("Ingrese un número");

		num1 = parseInt(num1);

		if(contador == 1){//El primer número ingresado

		maximo = num1;
		
		minimo = num1;

		//Entran en el else if xq a partir de aca son todos el segundo numero en adelante.

		} else if(num1 > maximo){
	 
		maximo = num1;

		} else if(num1 < minimo){

		minimo = num1;

		}

		respuesta = prompt("si para seguir");

	}

	document.getElementById("minimo").value = minimo;

	document.getElementById("maximo").value = maximo;




}//FIN DE LA FUNCIÓN