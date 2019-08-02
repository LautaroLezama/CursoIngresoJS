function mostrar() {

    var nota = parseInt(prompt("Ingrese la nota"));
    var sexo;
    var contador = 0;
    var promedio = 0;
    var contadorvaron = 0;
    var notamin = 0;
    var acumulador = 0;
    var sexomin;

    while (isNaN(nota) || nota < 0 || nota > 10) {

        nota = prompt("No es una nota valida, ingrese la nota: ");

    }

    nota = parseInt(nota);

    sexo = prompt("Ingrese el sexo");

    while (sexo != "m" && sexo != "f") {

        sexo = prompt("No es un sexo valido, ingrese el sexo: ");
    }

    while (contador < 5) {

        contador ++;

        if (contador == 1) {

            notamin = nota;

            sexomin = sexo;

        } else if (nota < notamin) {

            notamin = nota;

            sexomin = sexo;

        }

        if (sexo == "m" && nota >= 6) {

            contadorvaron = contadorvaron + 1;
        }

        acumulador = nota + acumulador;

    }

    promedio = acumulador / contador;

    alert("El promedio de las notas es " + promedio);

    alert("La nota mas baja es " + notamin + " y su sexo es " + sexomin);

    alert("La cantidad de varones que aprobaron con 6 o más es de " + contadorvaron);



















}
