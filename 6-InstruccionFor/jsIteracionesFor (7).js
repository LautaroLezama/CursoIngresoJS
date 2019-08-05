function mostrar()
{

    var num1;
    var contdivisores = 0;
    num1 = prompt("Ingrese un nùmero");

for(contador=1 ; contador != num1 ; contador ++){

    if(!(num1 % contador == 0)){

        continue;
    }

    contdivisores ++;
    console.log(contador);


}

console.log("Los divisores encontrados son " + contdivisores);









}//FIN DE LA FUNCIÓN