function mostrar() {

    var nota;
    var sexo;
    var contador = 0;
    var promedio = 0;
    var contadorvaron = 0;
    var notamin = 0;
    var acumulador = 0;
    var sexomin;



    while (contador < 5) {

        contador ++;

        nota = prompt("Ingrese la nota");

        while (isNaN(nota) || nota < 0 || nota > 10) {

            nota = prompt("No es una nota valida, ingrese la nota: ");
    
        }
    
        sexo = prompt("Ingrese el sexo");
    
        while (sexo != "m" && sexo != "f") {
    
            sexo = prompt("No es un sexo valido, ingrese el sexo: ");
        
        }

        nota = parseInt(nota);

        if (contador == 1 || nota < notamin) {

            notamin = nota;

            sexomin = sexo;
        } 

        if (sexo == "m" && nota > 5) {

            contadorvaron ++;
        }

        acumulador = nota + acumulador;

    }

    promedio = acumulador / contador;

    alert("El promedio de las notas es " + promedio + ". La nota màs baja es " + notamin + " y su sexo es " + sexomin + ". La cantidad de varones que aprobaron con 6 o más es de " + contadorvaron);




















}
