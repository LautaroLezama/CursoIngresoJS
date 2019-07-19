function mostrar()
{
    

var planeta = prompt("Ingrese un planeta del sistema solar");
var alerta ="";
//Se crea una variable con mensaje vacìo para ejecutar el alert al final
console.log(alerta);


switch (planeta){

    
    case "tierra":

        alerta = "aca vivimos";
        break;

    case "venus":
    case "mercurio":

        alerta = "aca hace màs calor";
        break;

    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        
        alerta = "aca hace màs frio";
        break;

    default:

        alerta = "No es un planeta valido";
        break;
    //Usa un solo alert capo
    
}   
    alert(alerta);
    // El alert fuera de la llave de Switch
}
