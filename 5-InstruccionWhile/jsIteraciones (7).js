function mostrar()
{

	var contador=0;
	var num1=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == "si"){

		num1 = prompt("Ingrese un número");

		num1 = parseInt(num1);

		acumulador = acumulador + num1;

		respuesta = prompt("si para seguir");

		contador ++;



	}	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN