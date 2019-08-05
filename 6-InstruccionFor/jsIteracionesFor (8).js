function mostrar()
{

var num1 = prompt("Ingrese un nùmero");
var contdiv = 0;


for(contador=1 ; contador <= num1 ; contador ++ ){


if (num1 % contador != 0){

    continue;
} 

contdiv ++;

}

if (contdiv == 2){

    console.log("El nùmero " + num1 + " es primo.");
} else {

    console.log("El nùmero " + num1 + " no es primo.");
}






}//FIN DE LA FUNCIÓN