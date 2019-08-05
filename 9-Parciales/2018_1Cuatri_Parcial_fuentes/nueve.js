function mostrar() {

    var marca;
    var peso;
    var temp;
    var respuesta = "si";
    var temppares = 0;
    var contador = 0;
    var maxmarca;
    var tempneg = 0;
    var acumuladorpeso = 0;
    var promediopeso = 0;
    var maximo;
    var minimo;


    while (respuesta == "si") {

        marca = prompt("Ingrese la marca del producto");

        peso = prompt("Ingrese el peso del producto");

        while (isNaN(peso) || peso < 1 || peso > 100) {

            peso = prompt("Peso invalido, ingrese el peso nuevamente")

        }

        peso = parseInt(peso);

        temp = prompt("Ingrese la temperatura");

        if (temp % 2 == 0){

            temppares ++;
        }

        if (contador == 0){

            maxmarca = marca;
            maximo = temp;
            minimo = temp;
        }

        if (temp > maximo){

            maximo = temp
            maxmarca = marca

        }

        if(temp < minimo){

            minimo = temp
        }

        if (temp < 0){

            tempneg ++;

        }

        acumuladorpeso = peso + acumuladorpeso

        contador ++;

        respuesta = prompt("si para continuar");
    }

    promediopeso = acumuladorpeso / contador;

    document.write("La cantidad de temperaturas pares es " + temppares + "<br>");
    document.write("La marca del producto más pesado es " + maxmarca + "<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados es " + tempneg + "<br>");
    document.write("El promedio del peso es " + promediopeso + "<br>");
    document.write("El peso máximo es " + maximo + " y el minimo es " + minimo + "<br>");

}
