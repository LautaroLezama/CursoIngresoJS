function mostrar() {

    var nota;
    var promedio;
    var notamin;
    var contadorvaron = 0;
    var sexo;
    var sexomin;
    var acumulador = 0;
    var contador = 0;

    while(contador < 5){

    nota = prompt("Ingresar una nota");

    while(isNaN(nota) || nota < 1 || nota > 10 ){

        nota = prompt("Nota invalida, ingresar una nota");
    } 

    nota = parseInt(nota);

    sexo = prompt("Ingresar el sexo con f o m").toLowerCase(); //toLowerCase para pasarlo a minuscula

    while(sexo != "f" && sexo != "m"){

        sexo = prompt("Sexo invalido, ingresar el sexo con f o m").toLowerCase(); //Si son caracteres especificos va en los 2. SI es cualquier letra lo pasamos al final.
    }

    if (contador == 0){

        notamin = nota;
        sexomin = sexo;
    }

    if(nota < notamin){

        notamin = nota;
        sexomin = sexo;
    }

    if(sexo == "m" && nota >= 6){

        contadorvaron ++;
    }

    acumulador = acumulador + nota;

    contador ++;
    }

    promedio = acumulador / contador;
    alert("El promedio de las notas es " + promedio + ".\nLa nota más baja es " + notamin + " y su sexo es " + sexomin + ".\nLa cantidad de varones que aprobaron fue de " + contadorvaron + ".");


}

