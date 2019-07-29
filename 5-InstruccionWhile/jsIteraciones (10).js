function mostrar()
{

    var num1;
    var contadorpos = 0;
    var contadorneg = 0;
    var contadorcero = 0;
    var promediopos = 0;
    var promedioneg = 0;
    var cero = 0;
    var negativo = 0;
    var positivo = 0;
    var respuesta = "si";
    var diferencia = 0;
    var contadorpares = 0;


    while(respuesta == "si"){

    num1 = prompt("Ingresar número");

    num1 = parseInt(num1);

    if (num1 % 2 == 0){

        contadorpares++;

    }

    if (num1 < cero){

    contadorneg ++;

    negativo = negativo + num1;

    promedioneg = negativo / contadorneg;

    } else if(num1 > cero){

    positivo = positivo + num1;

    contadorpos ++;

    promediopos = positivo / contadorpos;

    } else {

    contadorcero ++;

    }

    diferencia = positivo + negativo;    

    respuesta = prompt("si para continuar");

    }

    document.write("La suma de negativos es " + negativo + "<br>");
    document.write("La suma de positivos es " + positivo + "<br>");
    document.write("La cantidad de positivos es " + contadorpos + "<br>");
    document.write("La cantidad de negativos es " + contadorneg + "<br>");
    document.write("La cantidad de ceros es " + contadorcero + "<br>");
    document.write("La cantidad de números pares es " + contadorpares + "<br>");
    document.write("El promedio de positivos es " + promediopos + "<br>");
    document.write("El promedio de negativos es " + promedioneg + "<br>");
    document.write("La diferencia entre positivos y negativos es " + diferencia + "<br>");




}//FIN DE LA FUNCIÓN