function mostrar()
{

var num1;
var contadorpares = 0;
num1 = prompt("Ingresar un numero");

for(contador=0;contador != num1; contador++){


    if(contador % 2 != 0){

        continue;
    }
    console.log(contador);
    contadorpares ++;

}

console.log("Los pares encontrados son " + contadorpares);

}//FIN DE LA FUNCIÓN