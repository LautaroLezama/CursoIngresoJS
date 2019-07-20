function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num1 = 0;
	var respuesta='si';

	while(respuesta == "si"){

		contador ++;

		num1 = prompt("Ingrese un número");

		num1 = parseInt(num1);

		if(num1 > 0){

			positivo = positivo + num1;

		} else {

			negativo = negativo * num1;

		}

		respuesta = prompt("si para seguir");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN