function mostrar() {
    var numero = prompt("Ingrese un numero");

    var descuento = prompt("Ingrese el porcentaje de descuento");

    var descuentofinal

    var final;

    numero = parseInt(numero);

    descuento = parseInt(descuento);

    descuentofinal = numero * descuento / 100;

    final = numero - descuentofinal;

    document.getElementById("elPrecioFinal").value = final;



}
