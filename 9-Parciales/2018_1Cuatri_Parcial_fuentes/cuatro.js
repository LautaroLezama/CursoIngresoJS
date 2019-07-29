function mostrar()
{

var numero1 = prompt("Ingresar un numero");

var numero2 = prompt("Ingresar otro numero");

var mensaje = "";

var suma


numero1 = parseInt(numero1);

numero2 = parseInt(numero2);

if (numero1 == numero2){

mensaje = numero1+""+numero2;

} else if (numero1 > numero2){

    mensaje = numero1 - numero2;

} else if (numero1 < numero2){

    mensaje = numero1 + numero2;

    if(mensaje > 10){

        mensaje = "La suma es " + mensaje + " y supero el 10"

    }

}

alert(mensaje)





}
