function mostrar() {

    var letra;
    var num1;
    var respuesta = "si";
    var contadorpares = 0;
    var contadorimpares = 0;
    var contadorceros = 0;
    var contadorpos = 0;
    var promediopos = 0;
    var acumuladorpos = 0;
    var acumuladorneg = 0;
    var maximo;
    var minimo;
    var contador = 0;
    var letramax;
    var letramin;

    do {

        num1 = prompt("Ingrese un número");

        while (isNaN(num1) || num1 > 100 || num1 < -100) {

            num1 = prompt("Número incorrecto, ingrese un número");

        }

        num1 = parseInt(num1);

        letra = prompt("Ingrese una letra");

        /*while(!isNaN(letra) || letra.length > 1){ FALTAN COSAS PARA HACERLO A MEDIAS NO LO HAGAS CAPO.

            letra = prompt("Tiene que ser una letra, ingrese una letra");
        }*/

        letra = letra.toLowerCase();
        
        if (num1 % 2 == 0){

            contadorpares ++;

        } else {

            contadorimpares ++;

        }
    
        if (num1 > 0){

            acumuladorpos = num1 + acumuladorpos;

            contadorpos ++;

        } else if (num1 < 0){

            acumuladorneg = num1 + acumuladorneg;

        } else {

            contadorceros ++;

        }

        if (contador == 0){

            minimo = num1
            maximo = num1
            letramax = letra;
            letramin = letra; // Uno para letras y otro para números, se concatenan al final.
            
        }

        if (num1 > maximo){

            maximo = num1;
            letramax = letra;

        }

        if (num1 < minimo){

            minimo = num1;
            letramin = letra;

        }

        contador ++;

    } while(confirm("Quiere continuar?"))


    promediopos = acumuladorpos / contadorpos

    

    document.write("La cantidad de números pares es " + contadorpares + "<br>");
    document.write("La cantidad de números impares es " + contadorimpares + "<br>");
    document.write("La cantidad de ceros es " + contadorceros + "<br>");
    document.write("El promedio de todos los números positivos es " + promediopos + "<br>");
    document.write("La suma de todos los números negativos es " + acumuladorneg + "<br>");
    document.write("El número y letra del máximo es " + maximo + letramax + " y del minimo es " + minimo + letramin + "<br>");



















}
